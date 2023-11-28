export default function createReportObject(employeesList) {
  const reportObject = {
    getNumberOfDepartments() {
      return Object.keys(employeesList).length;
    },
    allEmployees: { ...employeesList },
  };
  return reportObject;
}
