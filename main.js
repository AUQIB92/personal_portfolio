const xlsx = require('xlsx');
const fs = require('fs');

// Function to convert Excel file to JSON
function excelToJson(filePath) {
    // Read the Excel file
    const workbook = xlsx.readFile(filePath);
    
    // Get the first worksheet (assuming the first sheet needs to be converted)
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    
    // Convert worksheet to JSON
    const jsonData = xlsx.utils.sheet_to_json(worksheet);

    return jsonData;
}

// Usage
const filePath = 'score.xlsx'; // Path to your Excel file
const jsonData = excelToJson(filePath);

// Save the JSON data to a file (optional)
fs.writeFileSync('result.json', JSON.stringify(jsonData, null, 2));

console.log(jsonData);
