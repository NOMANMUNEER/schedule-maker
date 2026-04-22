import { Link } from "react-router-dom";

export default function Navbar() {
  const links = [
    { to: "/study-schedule-maker", label: "Study" },
    { to: "/employee-schedule-maker", label: "Employee" },
    { to: "/weekly-schedule-maker", label: "Weekly" },
    { to: "/timetable-generator", label: "Timetable" },
    { to: "/rota-maker", label: "Rota" },
    { to: "/appointment-scheduler", label: "Appointments" },
  ];
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between flex-wrap">
        <Link to="/" className="text-xl font-bold text-indigo-600">📅 ScheduleAI</Link>
        <div className="flex gap-4 flex-wrap text-sm">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="hover:text-indigo-600">{l.label}</Link>
          ))}
        </div>
      </div>
    </nav>
  );
}