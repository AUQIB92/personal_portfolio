import clientPromise from '../../../lib/dbConnect';

export async function POST(req) {
  try {
    const body = await req.json(); // Get the request body
    const { rollNumber } = body;

    // Ensure that rollNumber is provided
    if (!rollNumber) {
      return new Response(JSON.stringify({ message: 'Roll number is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const client = await clientPromise;
    const db = client.db('Students'); // Replace with your actual database name

    // Query to find the student with the specific roll number
    const result = await db
      .collection('Result') // Replace with your actual collection name
      .findOne({ RollNumber: rollNumber });

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
    console.error('Error retrieving student result:', error);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
