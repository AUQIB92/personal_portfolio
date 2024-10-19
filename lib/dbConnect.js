// lib/db.js

import mongoose from 'mongoose';


// MongoDB connection string from environment variables
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable in .env.local');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then((mongoose) => {
      return mongoose;
    });
  }
  
  cached.conn = await cached.promise;

  // Once connected, initialize the admin user
 

  return cached.conn;
}

// Function to create initial admin user if it doesn't exist

export default connectToDatabase;
