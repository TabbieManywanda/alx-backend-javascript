export default function createIteratorObject(report) {
  const result = [];
  let count = 0;
  for (const idx of Object.values(report.allEmployees)) {
    for (const y of idx) {
      result[count] = y;
      count += 1;
    }
  }
  return result;
}
