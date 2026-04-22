// Converts "HH:MM" to minutes
const toMinutes = (t) => {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
};

// Converts minutes back to "HH:MM"
const toTime = (mins) => {
  const h = Math.floor(mins / 60).toString().padStart(2, "0");
  const m = (mins % 60).toString().padStart(2, "0");
  return `${h}:${m}`;
};

/**
 * Generate a smart schedule from task list
 * @param {Object} params
 * @param {Array} params.tasks [{name, duration(min), priority(1-5)}]
 * @param {String} params.startTime "08:00"
 * @param {String} params.endTime "18:00"
 * @param {Number} params.breakEvery minutes between breaks
 * @param {Number} params.breakDuration minutes
 */
function generateSchedule({ tasks, startTime, endTime, breakEvery = 90, breakDuration = 15 }) {
  if (!tasks || tasks.length === 0) return [];

  // Sort by priority (higher first)
  const sorted = [...tasks].sort((a, b) => (b.priority || 1) - (a.priority || 1));

  const start = toMinutes(startTime);
  const end = toMinutes(endTime);
  let current = start;
  let sinceBreak = 0;
  const schedule = [];

  for (const task of sorted) {
    if (current + task.duration > end) break;

    // Insert break if needed
    if (sinceBreak >= breakEvery) {
      schedule.push({
        name: "☕ Break",
        start: toTime(current),
        end: toTime(current + breakDuration),
        type: "break",
      });
      current += breakDuration;
      sinceBreak = 0;
    }

    schedule.push({
      name: task.name,
      start: toTime(current),
      end: toTime(current + task.duration),
      priority: task.priority,
      type: "task",
    });

    current += task.duration;
    sinceBreak += task.duration;
  }

  return schedule;
}

module.exports = { generateSchedule };