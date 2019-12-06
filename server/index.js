const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const axios = require('axios');

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
app.post('/api/v1/game', async (req, res, _) => {
  const { dateString, id } = req.body;
  const gameUrl = `http://nhl.freegamez.ga/getM3U8.php?league=NHL&date=${dateString}&id=${id}&cdn=akc`;
  console.log('gameUrl :', gameUrl);
  const proxyUrl = 'https://lazyguy-nhl-proxy.herokuapp.com/';
  try {
    const response = await axios.get(`${proxyUrl}${gameUrl}`, {
      headers: { 'X-Requested-With': 'XMLHttpRequest' },
    });
    res.json(response.data);
  } catch (error) {
    res.json(error);
  }
});

app.post('/api/v1/auth', async (req, res, _) => {
  const { username, password } = req.body;
  if (username === process.env.USERNAME && password === process.env.PASSWORD) {
    res.json({ code: 500, message: 'welcome!' });
  } else {
    res.json({ code: 403, message: 'you are not welcome here!' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
