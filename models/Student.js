import mongoose from 'mongoose';


const { Schema } = mongoose;

// Define the schema for the student
const StudentSchema = new Schema({
  RollNumber: {
    type: String,
    required: true,
    unique: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Branch: {
    type: String,
    required: true,
  },
  TheoryMarks: {
    type: Number,
    required: true,
  },
  PracticalMarks: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

// Export the model, and handle the potential recompiling issue in development mode
export default mongoose.models.Student || mongoose.model('Student', StudentSchema);
