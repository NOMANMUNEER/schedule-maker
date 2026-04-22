/**
 * Generate employee shift schedule
 * @param {Array} employees [{name}]
 * @param {Array} days ["Mon","Tue",...]
 * @param {Array} shifts ["Morning","Evening","Night"]
 */
function generateShifts({ employees, days, shifts }) {
  const result = [];
  let idx = 0;

  for (const day of days) {
    for (const shift of shifts) {
      const emp = employees[idx % employees.length];
      result.push({ day, shift, employee: emp.name });
      idx++;
    }
  }
  return result;
}

module.exports = { generateShifts };