const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Route for checking if the server is running.
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Route that returns the list of blog articles in JSON format.
app.get('/api/articles', (req, res) => {
  const filePath = path.join(__dirname, 'data', 'articles.json');

  fs.readFile(filePath, 'utf8', (error, data) => {
    if (error) {
      return res.status(500).json({
        message: 'Could not read articles file'
      });
    }

    try {
      const articles = JSON.parse(data);
      res.json(articles);
    } catch (parseError) {
      res.status(500).json({
        message: 'Articles file contains invalid JSON'
      });
    }
  });
});

// Route for opening the React SPA for all non-API GET requests.
app.get(/^(?!\/api).*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
