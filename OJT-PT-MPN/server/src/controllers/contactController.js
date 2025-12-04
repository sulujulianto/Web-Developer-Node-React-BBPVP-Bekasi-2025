const ContactMessage = require('../models/ContactMessage');

const submitContact = async (req, res) => {
  const { name, email, phone, subject, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Name, email, and message are required' });
  }

  try {
    await ContactMessage.create({ name, email, phone, subject, message });
    return res.json({ success: true, message: 'Message received' });
  } catch (err) {
    console.error('submitContact error:', err.message);
    return res.status(500).json({ success: false, message: 'Failed to submit message' });
  }
};

const getContacts = async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    return res.json({ success: true, data: messages });
  } catch (err) {
    console.error('getContacts error:', err.message);
    return res.status(500).json({ success: false, message: 'Failed to load contacts' });
  }
};

module.exports = { submitContact, getContacts };
