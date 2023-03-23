export default function createReportObject(employeesList) {
  const report = { allEmployees: employeesList };
  report.getNumberOfDepartments = () => Object.values(employeesList).length;
  return report;
}
