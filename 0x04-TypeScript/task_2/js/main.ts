interface DirectorInterface {
  workFromHome(): string
  getCoffeeBreak(): string
  workDirectorTasks(): string
}

interface TeacherInterface {
  workFromHome(): string
  getCoffeeBreak(): string
  workTeacherTasks(): string
}

class Director implements DirectorInterface {

  workFromHome(): string {
    return 'Working from home';
  };

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  };

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  };
}

class Teacher implements TeacherInterface {

  workFromHome(): string {
    return 'Cannot work from home';
  };

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  };

  workTeacherTasks(): string {
    return 'Getting to work';
  };
}

function createEmployee(salary: number | string): Teacher | Director {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

const teacher: Teacher | Director = createEmployee(400);

const director: Teacher | Director = createEmployee('400');


console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

console.log(teacher.getCoffeeBreak());
console.log(teacher.workFromHome());

console.log(director.getCoffeeBreak());
console.log(director.workFromHome());
