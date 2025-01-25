import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  loan: { type: mongoose.Schema.Types.ObjectId, ref: "Loan", required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  officeLocation: { type: String, required: true },
});

export default mongoose.model("Appointment", appointmentSchema);
