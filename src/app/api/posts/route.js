import { NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs/server';
import connectDB from '@/lib/mongodb';
import Post from '@/models/Post';
import { createGoogleDoc } from '@/lib/googleDocs';

// GET all posts for current user
export async function GET() {
  try {
    const user = await currentUser();
    
    if (!user) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await connectDB();
    const posts = await Post.find({ userId: user.id }).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: posts });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}

// POST create new post
export async function POST(request) {
  try {
    const user = await currentUser();
    
    if (!user) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await connectDB();
    const body = await request.json();
    
    // Create post in MongoDB first
    const post = await Post.create({
      ...body,
      userId: user.id,
      googleDocId: null, // Will be updated after Google Doc creation
    });
    
    // Try to create Google Doc
    try {
      const googleDocId = await createGoogleDoc(
        user.id,
        body.englishText,
        body.translatedText,
        body.language
      );
      
      // Update post with Google Doc ID
      post.googleDocId = googleDocId;
      await post.save();
      
    } catch (googleError) {
      console.error('Failed to create Google Doc:', googleError);
      // Post still saved in MongoDB, but without Google Doc
      // User can still use the app
    }
    
    return NextResponse.json({ success: true, data: post }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}