const mongoose = require('mongoose');

const TestimonialSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    company: { type: String },
    message: { type: String, required: true },
    photoPath: { type: String },
    isActive: { type: Boolean, default: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Testimonial', TestimonialSchema);
