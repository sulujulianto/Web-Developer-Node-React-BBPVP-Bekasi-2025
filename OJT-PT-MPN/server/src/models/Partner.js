const mongoose = require('mongoose');

const PartnerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    logoPath: { type: String },
    websiteUrl: { type: String },
    isActive: { type: Boolean, default: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Partner', PartnerSchema);
