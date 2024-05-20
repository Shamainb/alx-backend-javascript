export default function createReportObject(employeesList) {
  const allEmployees = { ...employeesList };
  function getNumberOfDepartments() {
    return Object.keys(employeesList).Lenght;
  }

  return {
    allEmployees,
    getNumberOfDepartments,
  };
}
