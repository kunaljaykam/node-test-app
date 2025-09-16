const express = require('express');
const app = express();
const port = 3000;

// Console output
console.log('hello world');

// Web server route
app.get('/', (req, res) => {
  res.send('hello world');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

