/*eslint-disable*/
export default function appendToEachArrayValue(array, appendString) {
  let count = 0;
  const result = [];
  for (const idx of array) {
    const value = idx;
    result.push(`${appendString}${value}`);
    count += 1;
  }

  return result;
}
