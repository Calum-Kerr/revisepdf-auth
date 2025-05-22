/**
 * RevisePDF Server
 *
 * A simple Express server to serve the RevisePDF application.
 * This server serves static files from the public directory and
 * handles the root route to serve the index.html file.
 */

// Import required modules
const express = require('express');
const path = require('path');

// Initialize Express application
const app = express();

// Set port from environment variable or default to 3000
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
// This includes CSS, JavaScript, images, and other assets
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html for the root route
// This ensures that the main page is served when accessing the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`RevisePDF server is running on port ${PORT}`);
});
