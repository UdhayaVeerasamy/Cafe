const express = require('express');
const router = express.Router();
const Enquiry = require('../models/Enquiry');

router.post('/enquiries', async (req, res) => {
  try {
    const newEnquiry = new Enquiry(req.body);
    const savedEnquiry = await newEnquiry.save();
    res.status(201).json({ success: true, data: savedEnquiry });
  } catch (error) {
    console.error('Error saving enquiry:', error);
    res.status(500).json({ success: false, error: 'Failed to submit enquiry' });
  }
});

router.get('/enquiries', async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: enquiries });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to fetch enquiries' });
  }
});

module.exports = router;
