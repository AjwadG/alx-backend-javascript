import fs from 'fs';

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    if (!path) reject(new Error('Cannot load the database'));

    fs.readFile(path, 'utf-8', (err, blob) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const data = blob.split('\n');
        const students = {};
        for (let i = 1; i < data.length - 1; i += 1) {
          if (data[i].length !== 0) {
            const student = data[i].split(',');
            if (!students[student[3]]) {
              students[student[3]] = [];
            }
            students[student[3]].push(student[0]);
          }
        }
        resolve(students);
      }
    });
  });
}

export default readDatabase;
module.exports = readDatabase;
