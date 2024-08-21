const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file content synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split the content by new lines and filter out any empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length <= 1) {
      throw new Error('No students found');
    }

    // Extract header and student data
    const header = lines[0].split(',');
    const studentData = lines.slice(1);

    // Log the total number of students
    console.log(`Number of students: ${studentData.length}`);

    // Create an object to store students by their field
    const fields = {};

    studentData.forEach((line) => {
      const studentInfo = line.split(',');
      const field = studentInfo[header.length - 1]; // Assuming the last column is the field
      const firstName = studentInfo[0];

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    });

    // Log the number of students per field and the list of first names
    for (const [field, students] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
