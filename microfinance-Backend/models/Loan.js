import mongoose from "mongoose";

const loanSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  category: { type: String, required: true },
  subcategory: { type: String, required: true },
  amount: { type: Number, required: true },
  loanPeriod: { type: Number, required: true },
  guarantors: [
    {
      name: { type: String, required: true },
      cnic: { type: String, required: true },
      location: { type: String, required: true },
    },
  ],
  status: { type: String, default: "pending" }, // 'pending', 'approved', 'rejected'
  appointment: {
    date: { type: Date },
    time: { type: String },
    officeLocation: { type: String },
  },
});

export default mongoose.model("Loan", loanSchema);
