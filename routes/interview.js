const express = require('express');
const router = express.Router();
const interviewController = require('../controllers/interviewController');

// Show Interview Form (GET)
router.get('/', interviewController.renderInterviewForm);

// Handle Interview Submission (POST)
router.post('/', (req, res) => {
  const { username, topic, voiceModel, language } = req.body;

  // You can also save these to DB here if needed

  res.render('result', { username, topic, voiceModel, language });
});

module.exports = router;
