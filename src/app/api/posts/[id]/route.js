import { NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs/server';
import connectDB from '@/lib/mongodb';
import Post from '@/models/Post';
import { updateGoogleDoc, deleteGoogleDoc } from '@/lib/googleDocs';

// GET single post
export async function GET(request, { params }) {
  try {
    const user = await currentUser();
    
    if (!user) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await connectDB();
    const post = await Post.findOne({ _id: params.id, userId: user.id });
    
    if (!post) {
      return NextResponse.json(
        { success: false, error: 'Post not found' },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: post });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}

// PUT update post
export async function PUT(request, { params }) {
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
    
    // Find the post first
    const existingPost = await Post.findOne({ _id: params.id, userId: user.id });
    
    if (!existingPost) {
      return NextResponse.json(
        { success: false, error: 'Post not found' },
        { status: 404 }
      );
    }
    
    // Update MongoDB
    const post = await Post.findOneAndUpdate(
      { _id: params.id, userId: user.id },
      body,
      { new: true, runValidators: true }
    );
    
    // Update Google Doc if it exists
    if (post.googleDocId) {
      try {
        await updateGoogleDoc(
          user.id,
          post.googleDocId,
          post.englishText,
          post.translatedText,
          post.language
        );
      } catch (googleError) {
        console.error('Failed to update Google Doc:', googleError);
        // MongoDB is updated, but Google Doc update failed
        // This is OK - user can still use the app
      }
    }
    
    return NextResponse.json({ success: true, data: post });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}

// DELETE post
export async function DELETE(request, { params }) {
  try {
    const user = await currentUser();
    
    if (!user) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await connectDB();
    const post = await Post.findOne({ _id: params.id, userId: user.id });
    
    if (!post) {
      return NextResponse.json(
        { success: false, error: 'Post not found' },
        { status: 404 }
      );
    }
    
    // Delete Google Doc if it exists
    if (post.googleDocId) {
      try {
        await deleteGoogleDoc(user.id, post.googleDocId);
      } catch (googleError) {
        console.error('Failed to delete Google Doc:', googleError);
        // Continue with MongoDB deletion even if Google Doc deletion fails
      }
    }
    
    // Delete from MongoDB
    await Post.findOneAndDelete({ _id: params.id, userId: user.id });
    
    return NextResponse.json({ success: true, data: {} });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}