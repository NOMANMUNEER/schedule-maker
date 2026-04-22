import jsPDF from "jspdf";

export default function ScheduleResult({ schedule }) {
  if (!schedule?.length) return null;

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("My Schedule", 14, 20);
    doc.setFontSize(11);
    schedule.forEach((s, i) => {
      doc.text(`${s.start} - ${s.end}  |  ${s.name}`, 14, 35 + i * 8);
    });
    doc.save("schedule.pdf");
  };

  const copyText = () => {
    const text = schedule.map(s => `${s.start}-${s.end} ${s.name}`).join("\n");
    navigator.clipboard.writeText(text);
    alert("Copied!");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow mt-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">Your Schedule</h3>
        <div className="flex gap-2">
          <button onClick={copyText} className="px-3 py-1 bg-gray-200 rounded text-sm">Copy</button>
          <button onClick={downloadPDF} className="px-3 py-1 bg-indigo-600 text-white rounded text-sm">PDF</button>
        </div>
      </div>
      <ul className="divide-y">
        {schedule.map((s, i) => (
          <li key={i} className={`py-2 flex justify-between ${s.type === "break" ? "text-orange-600" : ""}`}>
            <span className="font-mono text-sm">{s.start} - {s.end}</span>
            <span>{s.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}