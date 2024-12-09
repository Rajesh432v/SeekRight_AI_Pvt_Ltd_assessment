// Import the built-in 'http' module
const http = require('http');

// Define the port number
const PORT = 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Set the response headers for JSON content
  res.setHeader('Content-Type', 'application/json');
  
  // Respond with a JSON object
  const response = {
    message: 'Welcome to the Node.js HTTP server!',
    success: true,
  };

  // Send the JSON response
  res.end(JSON.stringify(response));
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
