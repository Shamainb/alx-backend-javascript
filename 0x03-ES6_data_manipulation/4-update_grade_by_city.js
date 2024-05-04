function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((e) => e.location === city)
    .map((e) => {
      for (const grade of newGrades) {
        if (grade === e.id) {
          e.grade = grade.grade;
        } else {
          e.grade = 'N/A';
        }
      }
      return e;
    });
}
export default updateStudentGradeByCity;
