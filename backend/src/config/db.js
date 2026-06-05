const mongoose = require("mongoose");

// Connect MongoDB using Mongoose with modern async patterns and cloud fallbacks
const connectDB = async () => {
  const localUri = process.env.LOCAL_MONGODB_URI;
  const atlasUri = process.env.MONGODB_URI;

  // In production, force atlas connection
  if (process.env.NODE_ENV === "production") {
    if (!atlasUri) {
      console.error("[❌ Database Error] Production MongoDB URI is missing");
      process.exit(1);
    }
    try {
      const conn = await mongoose.connect(atlasUri);
      console.log(`[🗄️ Database] Connected to Production MongoDB Atlas: ${conn.connection.host}`);
      return;
    } catch (err) {
      console.error(`[❌ Database Error] Atlas Connection Failed: ${err.message}`);
      process.exit(1);
    }
  }

  // In development, try local first, fallback to atlas if local connection fails
  try {
    if (!localUri) throw new Error("Local URI not configured");
    console.log("[🗄️ Database] Attempting connection to Local MongoDB...");
    const conn = await mongoose.connect(localUri, { serverSelectionTimeoutMS: 3000 });
    console.log(`[🗄️ Database] Connected to Local MongoDB: ${conn.connection.host}`);
  } catch (localErr) {
    console.warn(`[⚠️ Database Warning] Local MongoDB failed (${localErr.message}). Trying Atlas Cloud...`);
    if (atlasUri) {
      try {
        const conn = await mongoose.connect(atlasUri, { serverSelectionTimeoutMS: 5000 });
        console.log(`[🗄️ Database] Connected to MongoDB Atlas: ${conn.connection.host}`);
      } catch (atlasErr) {
        console.error(`[❌ Database Error] Both Local and Atlas connections failed: ${atlasErr.message}`);
        process.exit(1);
      }
    } else {
      console.error("[❌ Database Error] Local connection failed and no Atlas URI was provided.");
      process.exit(1);
    }
  }
};

module.exports = connectDB;
