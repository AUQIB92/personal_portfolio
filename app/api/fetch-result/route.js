import dbConnect from '../../../lib/dbConnect';
import Students from '../../../models/Student';

export async function POST(req) {
  try {
    await dbConnect();  // Establish MongoDB connection

    const body = await req.json();  // Parse the request body
    const { rollNumber } = body;

    console.log('RollNumber:', rollNumber);
    console.log('Type of rollNumber:', typeof rollNumber);  // Check the type of rollNumber

    if (!rollNumber) {
      return new Response(JSON.stringify({ message: 'Roll number is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }


    // Ensure rollNumber is treated as a string and match the field exactly as in the database
    const result = await Students.findOne({ RollNumber: String(rollNumber) });

    console.log('Query Result:', result);

    if (!result) {
      return new Response(JSON.stringify({ message: 'Student not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Return the student result if found
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
