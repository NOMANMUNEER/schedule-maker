const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema(
  {
    type: { type: String, required: true }, // study, employee, weekly, etc.
    input: { type: Object, required: true },
    output: { type: Array, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Schedule", scheduleSchema);