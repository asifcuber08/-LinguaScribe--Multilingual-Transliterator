import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      index: true,
    },
    englishText: {
      type: String,
      required: true,
    },
    translatedText: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
      enum: ['hindi', 'kannada', 'gujarati'],
      default: 'hindi',
    },
    googleDocId: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Post || mongoose.model('Post', PostSchema);