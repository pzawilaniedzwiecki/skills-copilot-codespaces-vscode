// Create web server
// Usage: node comments.js

// Import the express module
const express = require('express');

// Import the body-parser module
const bodyParser = require('body-parser');

// Create a new web server
const app = express();

// Use the body-parser middleware to parse the body of incoming requests
app.use(bodyParser.json());

// Create a new array to store the comments
const comments = [];

// Add a new comment
app.post('/comments', (req, res) => {
  const comment = req.body.comment;

  comments.push(comment);

  res.send(comments);
});

// Get all the comments
app.get('/comments', (req, res) => {
  res.send(comments);
});

// Get a comment by index
app.get('/comments/:index', (req, res) => {
  const index = req.params.index;

  if (index >= 0 && index < comments.length) {
    res.send(comments[index]);
  } else {
    res.status(404).send();
  }
});

// Delete a comment by index
app.delete('/comments/:index', (req, res) => {
  const index = req.params.index;

  if (index >= 0 && index < comments.length) {
    comments.splice(index, 1);
    res.send(comments);
  } else {
    res.status(404).send();
  }
});

// Update a comment by index
app.put('/comments/:index', (req, res) => {
  const index = req.params.index;

  if (index >= 0 && index < comments.length) {
    comments[index] = req.body.comment;
    res.send(comments);
  } else {
    res.status(404).send();
  }
});

// Start the web server on port 3000
app.listen(3000, () => {
  console.log('Web server started on port 3000');
});