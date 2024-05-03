function getStudentIdsSum(students) {
  return students.reduce((sum, current) => sum + current.id, 0);
}
export default getStudentIdsSum;
