import { useState } from "react";
import { Helmet } from "react-helmet-async";
import ScheduleForm from "../components/ScheduleForm";
import ScheduleResult from "../components/ScheduleResult";
import AdBanner from "../components/AdBanner";
import { createSchedule } from "../utils/api";

export default function StudySchedule() {
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (input) => {
    setLoading(true);
    try {
      const { data } = await createSchedule({ type: "study", input });
      setSchedule(data.data.output);
    } catch (e) { alert("Error generating"); }
    setLoading(false);
  };

  return (
    <>
      <Helmet>
        <title>Free Study Schedule Maker - AI Powered Planner</title>
        <meta name="description" content="Create a perfect study schedule for free. Our AI study planner organizes subjects, breaks, and priorities to maximize learning." />
        <link rel="canonical" href="https://yourdomain.com/study-schedule-maker" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-3">Free Study Schedule Maker</h1>
        <p className="text-gray-600 mb-6">
          Build a smart, balanced study plan in seconds. Add your subjects, set priorities, and our AI creates an optimized timetable with breaks.
        </p>

        <AdBanner slot="1111111111" />

        <ScheduleForm onGenerate={handleGenerate} loading={loading} />
        <ScheduleResult schedule={schedule} />

        <AdBanner slot="2222222222" />

        <article className="prose mt-10">
          <h2>How to Make an Effective Study Schedule</h2>
          <p>A great study schedule balances focus time with breaks. Research shows that 90-minute focus blocks followed by short breaks boost retention...</p>
          <h3>Benefits of Using Our AI Study Planner</h3>
          <ul>
            <li>Automatic prioritization of difficult subjects</li>
            <li>Built-in break timing for optimal focus</li>
            <li>Export to PDF to print or share</li>
          </ul>
          <h3>FAQ</h3>
          <p><strong>Is it free?</strong> Yes, 100% free to use.</p>
          <p><strong>Do I need to sign up?</strong> No signup required.</p>
        </article>
      </div>
    </>
  );
}