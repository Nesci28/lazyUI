const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();

// Logger
app.use(morgan('tiny'));

// Cors
app.use(cors());

// Express body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.post('/api/v1/auth', async (req, res, _) => {
  const { username, password } = req.body;
  if (username === process.env.USERNAME && password === process.env.PASSWORD) {
    res.json({ message: 'welcome!' });
  } else {
    res.json({ message: 'you are not welcome here!' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
