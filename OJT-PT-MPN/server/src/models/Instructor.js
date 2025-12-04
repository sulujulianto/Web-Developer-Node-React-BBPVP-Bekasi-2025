const mongoose = require('mongoose');

const InstructorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    title: { type: String },
    bio: { type: String },
    photoPath: { type: String },
    expertise: [{ type: String }]
  },
  { timestamps: true }
);

module.exports = mongoose.model('Instructor', InstructorSchema);
