import { google } from 'googleapis';
import { clerkClient } from '@clerk/nextjs/server';

/**
 * Get Google OAuth access token for a user
 */
export async function getGoogleAccessToken(userId) {
  try {
    const client = await clerkClient();
    const tokenResponse = await client.users.getUserOauthAccessToken(
      userId,
      'oauth_google'
    );
    
    if (!tokenResponse || !tokenResponse.data || tokenResponse.data.length === 0) {
      throw new Error('No Google OAuth token found. User may need to re-authenticate.');
    }
    
    return tokenResponse.data[0].token;
  } catch (error) {
    console.error('Error getting Google access token:', error);
    throw new Error('Failed to get Google access token: ' + error.message);
  }
}

/**
 * Initialize Google API clients
 */
function getGoogleClients(accessToken) {
  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({ access_token: accessToken });
  
  const docs = google.docs({ version: 'v1', auth: oauth2Client });
  const drive = google.drive({ version: 'v3', auth: oauth2Client });
  
  return { docs, drive };
}

/**
 * Create a new Google Doc
 */
export async function createGoogleDoc(userId, englishText, translatedText, language) {
  try {
    const accessToken = await getGoogleAccessToken(userId);
    const { docs } = getGoogleClients(accessToken);
    
    // Create document
    const currentDate = new Date().toLocaleDateString();
    const doc = await docs.documents.create({
      requestBody: {
        title: `Translation: ${language} - ${currentDate}`
      }
    });
    
    const docId = doc.data.documentId;
    
    // Add content to document
    await docs.documents.batchUpdate({
      documentId: docId,
      requestBody: {
        requests: [
          {
            insertText: {
              location: { index: 1 },
              text: `English:\n${englishText}\n\n${language.charAt(0).toUpperCase() + language.slice(1)}:\n${translatedText}\n\n---\nCreated: ${new Date().toLocaleString()}`
            }
          }
        ]
      }
    });
    
    return docId;
  } catch (error) {
    console.error('Error creating Google Doc:', error);
    throw new Error('Failed to create Google Doc: ' + error.message);
  }
}

/**
 * Update an existing Google Doc
 */
export async function updateGoogleDoc(userId, googleDocId, englishText, translatedText, language) {
  try {
    const accessToken = await getGoogleAccessToken(userId);
    const { docs } = getGoogleClients(accessToken);
    
    // Get current document to find the end index
    const doc = await docs.documents.get({ documentId: googleDocId });
    const endIndex = doc.data.body.content[doc.data.body.content.length - 1].endIndex;
    
    // Clear existing content and insert new content
    await docs.documents.batchUpdate({
      documentId: googleDocId,
      requestBody: {
        requests: [
          {
            deleteContentRange: {
              range: {
                startIndex: 1,
                endIndex: endIndex - 1
              }
            }
          },
          {
            insertText: {
              location: { index: 1 },
              text: `English:\n${englishText}\n\n${language.charAt(0).toUpperCase() + language.slice(1)}:\n${translatedText}\n\n---\nUpdated: ${new Date().toLocaleString()}`
            }
          }
        ]
      }
    });
    
    return true;
  } catch (error) {
    console.error('Error updating Google Doc:', error);
    throw new Error('Failed to update Google Doc: ' + error.message);
  }
}

/**
 * Delete a Google Doc
 */
export async function deleteGoogleDoc(userId, googleDocId) {
  try {
    const accessToken = await getGoogleAccessToken(userId);
    const { drive } = getGoogleClients(accessToken);
    
    await drive.files.delete({
      fileId: googleDocId
    });
    
    return true;
  } catch (error) {
    console.error('Error deleting Google Doc:', error);
    // Don't throw error if doc is already deleted or not found
    if (error.code === 404) {
      console.log('Google Doc not found, may have been deleted already');
      return true;
    }
    throw new Error('Failed to delete Google Doc: ' + error.message);
  }
}

/**
 * Get Google Doc URL
 */
export function getGoogleDocUrl(googleDocId) {
  return `https://docs.google.com/document/d/${googleDocId}/edit`;
}