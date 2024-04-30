function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city)
    .map((student) => {
      const [grade] = newGrades.filter((grade) => grade.studentId === student.id);
      const newStudent = student;
      newStudent.grade = grade !== undefined ? grade.grade : 'N/A';
      return newStudent;
    });
}

export default updateStudentGradeByCity;
