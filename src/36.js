const express = require('express');

// Create an Express application instance
const app = express();

// Define a route to display a greeting page
app.get('/', (req, res) => {
  // Return a simple HTML page containing a welcome message
  res.render('index', { message: 'Hello, World! This is your first Express app!' });
});

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
