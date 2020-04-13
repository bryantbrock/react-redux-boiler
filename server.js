const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const config = require('./config/default.json')

const app = express();

// Bodyparser Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "client", "build")));

// DB Config
const db = process.env.MONGODB_URI || config.mongoURI;
app.use(cors());

// Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/auth', require('./api/auth'));
// app.use('/api/users', require('./api/users'));
// app.use('/api/record', require('./api/record'));

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 4999;

app.listen(port, () => console.log(`Server started on port ${port}`));