function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((e) => e.location === city)
    .map((e) => {
      const grade = newGrades.find((grades) => grades.studentId === e.id);
      if (grade) {
        e.grade = grade.grade;
      } else {
        e.grade = 'N/A';
      }
      return e;
    });
}
export default updateStudentGradeByCity;
