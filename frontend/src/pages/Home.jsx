import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AdBanner from "../components/AdBanner";

const tools = [
  { to: "/study-schedule-maker", title: "Study Schedule Maker", desc: "Plan subjects & revision" },
  { to: "/employee-schedule-maker", title: "Employee Scheduler", desc: "Assign shifts easily" },
  { to: "/weekly-schedule-maker", title: "Weekly Planner", desc: "Organize your week" },
  { to: "/timetable-generator", title: "Timetable Generator", desc: "Class timetables" },
  { to: "/rota-maker", title: "Rota Maker", desc: "Team rotas in seconds" },
  { to: "/appointment-scheduler", title: "Appointment Scheduler", desc: "Book & plan meetings" },
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>ScheduleAI - Free AI Schedule Generator Tools</title>
        <meta name="description" content="Generate study plans, work shifts, weekly planners and more with AI. 100% free online schedule maker." />
      </Helmet>
      <section className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">AI Schedule Generator</h1>
        <p className="text-xl opacity-90">Build smart schedules in seconds — free & no signup.</p>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-10">
        <AdBanner slot="3333333333" />
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {tools.map(t => (
            <Link key={t.to} to={t.to}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">{t.title}</h3>
              <p className="text-gray-600">{t.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}