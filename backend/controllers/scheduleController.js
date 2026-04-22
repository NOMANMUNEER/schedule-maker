const Schedule = require("../models/Schedule");
const { generateSchedule } = require("../utils/scheduleEngine");
const { generateShifts } = require("../utils/shiftEngine");

exports.createSchedule = async (req, res) => {
  try {
    const { type, input } = req.body;
    let output = [];

    if (type === "shifts") {
      output = generateShifts(input);
    } else {
      output = generateSchedule(input);
    }

    const saved = await Schedule.create({ type, input, output });
    res.status(201).json({ success: true, data: saved });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.getSchedule = async (req, res) => {
  try {
    const s = await Schedule.findById(req.params.id);
    if (!s) return res.status(404).json({ error: "Not found" });
    res.json({ success: true, data: s });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};