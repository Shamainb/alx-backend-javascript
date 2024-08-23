const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const countStudents = (database) => {
    return new Promise((resolve, reject) => {
        fs.readFile(database, 'utf8', (err, data) => {
            if (err) {
                reject(Error('Cannot load the database'));
            } else {
                const lines = data.trim().split('\n');
                const header = lines[0].split(',');
                const students = lines.slice(1).filter(line => line !== '');
                const fields = {};
                
                students.forEach((student) => {
                    const [firstName, , , field] = student.split(',');
                    if (!fields[field]) fields[field] = [];
                    fields[field].push(firstName);
                });

                const totalStudents = students.length;
                let output = `Number of students: ${totalStudents}\n`;

                for (const [field, students] of Object.entries(fields)) {
                    output += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
                }

                resolve(output.trim());
            }
        });
    });
};

app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
    const database = process.argv[2];
    if (!database) {
        res.status(500).send('Database file not provided');
        return;
    }
    countStudents(database)
        .then((output) => {
            res.send(`This is the list of our students\n${output}`);
        })
        .catch((error) => {
            res.status(500).send(error.message);
        });
});

app.listen(1245, () => {
    console.log('Server listening on port 1245');
});

module.exports = app;
