import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable in .env.local');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;  // Return cached connection if it exists
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI)
      .then((mongoose) => {
        console.log('MongoDB connection established');
        return mongoose;
      })
      .catch((error) => {
        // Enhanced error logging
        console.error('MongoDB connection error:', error);
        if (error.cause) {
          console.error('Error cause:', error.cause);  // Log the `cause` for more detailed information
        }
        throw new Error('MongoDB connection failed');
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
