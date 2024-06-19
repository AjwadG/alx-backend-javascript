import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    const arg = process.argv[2] || '';
    readDatabase(arg)
      .then((students) => {
        const data = Object.keys(students).sort((a, b) => a[0].toLowerCase() - b[0].toLowerCase());
        let output = 'This is the list of our students';
        for (let i = 0; i < data.length; i += 1) {
          output += `\nNumber of students in ${data[i]}: ${
            students[data[i]].length
          }. List: ${students[data[i]].join(', ')}`;
        }
        response.status(200).send(output);
      })
      .catch((error) => response.status(500).send(error.message));
  }

  static getAllStudentsByMajor(request, response) {
    const arg = process.argv[2] || '';
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(arg)
      .then((students) => {
        let output = '';
        if (Object.keys(students).includes(major)) {
          output = `List: ${students[major].join(', ')}`;
        }
        response.status(200).send(output);
      })
      .catch((error) => response.status(500).send(error.message));
  }
}

module.exports = StudentsController;
export default StudentsController;
