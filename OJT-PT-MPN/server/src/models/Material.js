const mongoose = require('mongoose');

const MaterialSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    filePath: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Material', MaterialSchema);
