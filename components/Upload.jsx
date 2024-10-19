'use client';
import { useState } from 'react';

export default function Upload() {
  const [jsonData, setJsonData] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch('/api/upload-result', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: jsonData,
      });

      const data = await res.json();
      setResponse(data.message);
    } catch (error) {
      console.error('Error uploading JSON:', error);
      setResponse('Error uploading JSON');
    }
  };

  return (
    <div>
      <h1>Upload JSON Data to MongoDB Atlas</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="10"
          cols="50"
          placeholder="Paste your JSON data here"
          value={jsonData}
          onChange={(e) => setJsonData(e.target.value)}
        ></textarea>
        <br />
        <button type="submit">Upload JSON</button>
      </form>
      {response && <p>{response}</p>}
    </div>
  );
}
