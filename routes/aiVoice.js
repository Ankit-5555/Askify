// routes/aiVoice.js
const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/speak', async (req, res) => {
  const { text, voiceId } = req.body;

  try {
    const response = await axios.post(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, 
      {
        text: text,
        model_id: "eleven_multilingual_v2",
        voice_settings: { stability: 0.75, similarity_boost: 0.75 }
      }, 
      {
        headers: {
          'xi-api-key': process.env.ELEVENLABS_API_KEY,
          'Content-Type': 'application/json'
        },
        responseType: 'arraybuffer'
      });

    res.set('Content-Type', 'audio/mpeg');
    res.send(response.data);

  } catch (err) {
    console.error('AI Voice Error:', err.message);
    res.status(500).send('Voice generation failed');
  }
});

module.exports = router;
