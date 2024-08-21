const http = require('http');
const fs = require('fs');

// Function to count and list students from the CSV file
function countStudents(database) {
  return new Promise((resolve, reject) => {
    fs.readFile(database, 'utf8', (err, data) => {
      if (err) {
        reject(new Error(`Cannot load the database ${database}`));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      if (lines.length === 0) {
        reject(new Error(`No valid student data found in the database ${database}`));
        return;
      }

      const students = lines.map((line) => line.split(','));
      const fields = {};

      students.forEach((student) => {
        const [firstName, , , field] = student;
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstName);
      });

      let result = `Number of students: ${students.length}\n`;
      for (const [field, names] of Object.entries(fields)) {
        result += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }

      resolve(result.trim());
    });
  });
}

// Create the HTTP server
const app = http.createServer(async (req, res) => {
  const { url } = req;

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    const database = process.argv[2]; // Get the database file from command line argument
    try {
      const result = await countStudents(database);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`This is the list of our students\n${result}`);
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(error.message);
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
