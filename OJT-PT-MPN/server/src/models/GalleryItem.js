const mongoose = require('mongoose');

const GalleryItemSchema = new mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    imagePath: { type: String, required: true },
    category: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model('GalleryItem', GalleryItemSchema);
