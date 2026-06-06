// Vercel Serverless Function entry point
const app = require('../backend/src/app');
const connectDB = require('../backend/src/config/db');

// Connect to MongoDB before handling the request
// In a serverless environment, this helps reuse the connection if the container stays warm
let isConnected = false;

module.exports = async (req, res) => {
  if (!isConnected) {
    try {
      await connectDB();
      isConnected = true;
    } catch (error) {
      console.error('Failed to connect to database in serverless function:', error);
      return res.status(500).json({ success: false, message: 'Database connection failed' });
    }
  }
  
  // Pass the request to the Express app
  return app(req, res);
};
