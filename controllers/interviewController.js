// Render Interview Page
module.exports.renderInterviewForm = (req, res) => {
  res.render('interview');  // views/interview.ejs
};

// Handle Form Submission (Just Placeholder)
module.exports.handleInterview = (req, res) => {
  const { topic, username } = req.body;
  console.log(`Interview for ${username} on ${topic}`);
  res.render('result', { username, topic });  // views/result.ejs
};

// Render Interview Page
module.exports.renderInterviewForm = (req, res) => {
  res.render('interview');
};

module.exports.handleInterview = (req, res) => {
  const { topic, username } = req.body;
  res.render('result', { topic, username });
};

