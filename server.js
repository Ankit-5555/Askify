const dotenv = require('dotenv');
dotenv.config(); 
console.log("✅ Loaded Mongo URI:", process.env.MONGO_URI);

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');



const methodOverride = require('method-override');

const app = express();

// ENV Config
// dotenv.config();

// MongoDB Connection
console.log("Mongo URI 👉", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('✅ MongoDB Connected'))
  .catch((err) => console.log('❌ MongoDB Connection Error:', err));

// View Engine & Middleware Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Routes Import (✅ Make sure these files are correct)
const indexRoutes = require('./routes/index');
const interviewRoutes = require('./routes/interview');

// Use Routes
app.use('/', indexRoutes);
app.use('/interview', interviewRoutes);

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server started at http://localhost:${PORT}`));


const aiVoiceRoutes = require('./routes/aiVoice');
app.use('/api/voice', aiVoiceRoutes);
