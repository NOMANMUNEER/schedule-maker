import { useState } from "react";

export default function ScheduleForm({ onGenerate, loading }) {
  const [tasks, setTasks] = useState([{ name: "", duration: 30, priority: 3 }]);
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("17:00");

  const updateTask = (i, field, val) => {
    const copy = [...tasks];
    copy[i][field] = field === "name" ? val : Number(val);
    setTasks(copy);
  };

  const addTask = () => setTasks([...tasks, { name: "", duration: 30, priority: 3 }]);
  const removeTask = (i) => setTasks(tasks.filter((_, idx) => idx !== i));

  const submit = (e) => {
    e.preventDefault();
    const valid = tasks.filter((t) => t.name.trim());
    if (!valid.length) return alert("Add at least one task");
    onGenerate({ tasks: valid, startTime, endTime });
  };

  return (
    <form onSubmit={submit} className="bg-white p-6 rounded-xl shadow space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium">Start Time</label>
          <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)}
            className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="text-sm font-medium">End Time</label>
          <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)}
            className="w-full border rounded p-2" />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold">Tasks</h3>
        {tasks.map((t, i) => (
          <div key={i} className="grid grid-cols-12 gap-2 items-center">
            <input placeholder="Task name" value={t.name}
              onChange={(e) => updateTask(i, "name", e.target.value)}
              className="col-span-6 border rounded p-2" />
            <input type="number" min="5" value={t.duration}
              onChange={(e) => updateTask(i, "duration", e.target.value)}
              className="col-span-3 border rounded p-2" placeholder="Min" />
            <select value={t.priority}
              onChange={(e) => updateTask(i, "priority", e.target.value)}
              className="col-span-2 border rounded p-2">
              {[1,2,3,4,5].map(p => <option key={p} value={p}>P{p}</option>)}
            </select>
            <button type="button" onClick={() => removeTask(i)}
              className="col-span-1 text-red-500">✕</button>
          </div>
        ))}
        <button type="button" onClick={addTask}
          className="text-indigo-600 text-sm">+ Add Task</button>
      </div>

      <button type="submit" disabled={loading}
        className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700">
        {loading ? "Generating..." : "⚡ Generate Schedule"}
      </button>
    </form>
  );
}