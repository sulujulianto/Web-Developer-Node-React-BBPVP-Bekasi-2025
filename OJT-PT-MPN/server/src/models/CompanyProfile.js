const mongoose = require('mongoose');

const CompanyProfileSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    vision: { type: String },
    mission: [{ type: String }],
    address: { type: String },
    phone: { type: String },
    email: { type: String },
    whatsapp: { type: String },
    logoPath: { type: String },
    bannerPath: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model('CompanyProfile', CompanyProfileSchema);
