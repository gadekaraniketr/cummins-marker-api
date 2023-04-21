const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const https = require('https');
const fs = require('fs');

// Define API key and create MySQL connection
const API_KEY = process.env.API_KEY || 'default_key';

// Database connectivity
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydb'
});

// Create express app and apply middleware
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API key middleware function
const apiKeyMiddleware = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey === API_KEY) {
    return next();
  } else {
    return res.status(401).json({ error: 'Unauthorized' });
  }
};

// Routes for users API
app.get('/api/users', apiKeyMiddleware, (req, res) => {
  const sql = 'SELECT * FROM users';
  db.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    return res.json(results);
  });
});

app.post('/api/users', apiKeyMiddleware, (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Missing required parameter(s)' });
  }
  const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
  db.query(sql, [name, email], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    return res.json({ id: result.insertId, name, email });
  });
});

// HTTPS server options
const options = {
  key: fs.readFileSync('./certs/server.key'),
  cert: fs.readFileSync('./certs/server.cert')
};

// Start HTTPS server
const PORT = process.env.PORT || 3000;
https.createServer(options, app).listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
