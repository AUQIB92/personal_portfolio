import dbConnect from '../../../lib/dbConnect';  // Adjust the import path based on your project structure
import Student from '../../../models/Student';  // Assuming you have a Student model

export async function POST(req) {
  try {
    await dbConnect();  // Establish connection

    const body = await req.json(); // Parse the incoming request body
    const { rollNumber } = body;

    if (!rollNumber) {
      return new Response(JSON.stringify({ message: 'Roll number is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Assuming you have a Student model that matches your MongoDB schema
    const result = await Student.findOne({ RollNumber: rollNumber });

    if (!result) {
      return new Response(JSON.stringify({ message: 'Student not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching student result:', error);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
