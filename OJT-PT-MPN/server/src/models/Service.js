const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    shortDescription: { type: String },
    description: { type: String },
    iconPath: { type: String },
    isActive: { type: Boolean, default: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Service', ServiceSchema);
