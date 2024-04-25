export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  get lenght() {
    return this._lenght;
  }

  get students() {
    return this._students;
  }

  set name(name) {
    if (typeof name !== 'string') throw new TypeError('Name must be a string');

    this._name = name;
  }

  set length(length) {
    if (typeof length !== 'number') throw new TypeError('Length must be a number');

    this._length = length;
  }

  set students(students) {
    if (!Array.isArray(students)) throw new TypeError('Students must be an array of strings');

    students.forEach((item) => {
      if (typeof item !== 'string') throw new TypeError('Students must be an array of strings');
    });

    this._students = students;
  }
}
