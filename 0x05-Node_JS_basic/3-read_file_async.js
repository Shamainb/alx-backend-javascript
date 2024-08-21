const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      const lines = data.split('\n').filter((line) => line.trim() !== '');

      if (lines.length <= 1) {
        throw new Error('No students found');
      }

      const header = lines[0].split(',');
      const studentData = lines.slice(1);

      console.log(`Number of students: ${studentData.length}`);

      const fields = {};

      studentData.forEach((line) => {
        const studentInfo = line.split(',');
        const field = studentInfo[header.length - 1];
        const firstName = studentInfo[0];

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
      });

      for (const [field, students] of Object.entries(fields)) {
        console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
      }
    })
    .catch(() => {
      throw new Error('Cannot load the database')();
    });
}

module.exports = countStudents;
