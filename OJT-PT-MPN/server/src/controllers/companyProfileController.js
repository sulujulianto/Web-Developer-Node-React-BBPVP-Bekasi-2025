const CompanyProfile = require('../models/CompanyProfile');

const ensureProfile = async () => {
  let profile = await CompanyProfile.findOne();
  if (!profile) {
    profile = await CompanyProfile.create({
      name: 'PT MPN',
      description: '',
      vision: '',
      mission: [],
      address: '',
      phone: '',
      email: '',
      whatsapp: '',
      logoPath: '',
      bannerPath: ''
    });
  }
  return profile;
};

const getCompanyProfile = async (req, res) => {
  try {
    const profile = await ensureProfile();
    return res.json({ success: true, data: profile });
  } catch (err) {
    console.error('getCompanyProfile error:', err.message);
    return res.status(500).json({ success: false, message: 'Failed to load profile' });
  }
};

const getCompanyProfileAdmin = async (req, res) => {
  try {
    const profile = await ensureProfile();
    return res.json({ success: true, data: profile });
  } catch (err) {
    console.error('getCompanyProfileAdmin error:', err.message);
    return res.status(500).json({ success: false, message: 'Failed to load profile' });
  }
};

const updateCompanyProfile = async (req, res) => {
  try {
    const update = { ...req.body };

    if (update.mission && typeof update.mission === 'string') {
      update.mission = update.mission.split('\n').map((m) => m.trim()).filter(Boolean);
    }

    const profile = await CompanyProfile.findOneAndUpdate({}, update, {
      new: true,
      upsert: true,
      setDefaultsOnInsert: true
    });

    return res.json({ success: true, data: profile });
  } catch (err) {
    console.error('updateCompanyProfile error:', err.message);
    return res.status(500).json({ success: false, message: 'Failed to update profile' });
  }
};

module.exports = { getCompanyProfile, getCompanyProfileAdmin, updateCompanyProfile };
