interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [propName: string]: any,
};

interface Directors extends Teacher {
  numberOfReports: number;
};

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
};

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName[0]}. ${lastName}`;
};

interface StudentClassInerFace {
  displayName(): string
  workOnHomework(): string
}

interface StudentClassConstructor {
  new(firstName: string, lastName: string): StudentClassInerFace;
}


class StudentClass implements StudentClassInerFace, StudentClassInerFace {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  };

  displayName(): string {
    return this.firstName;
  };

  workOnHomework(): string {
    return 'Currently working';
  };

}


const student: StudentClass = new StudentClass('Ajwad', 'Elgandouz');

console.log(student.lastName);
console.log(student.firstName);
console.log(student.displayName());
console.log(student.workOnHomework());
