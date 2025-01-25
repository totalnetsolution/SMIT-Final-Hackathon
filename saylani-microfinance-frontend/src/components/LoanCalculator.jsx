// src/components/LoanCalculator.jsx
import { useState } from "react";

export default function LoanCalculator() {
  const [category, setCategory] = useState("");
  const [initialDeposit, setInitialDeposit] = useState(0);
  const [loanPeriod, setLoanPeriod] = useState(0);
  const [loanBreakdown, setLoanBreakdown] = useState(null);

  const calculateLoan = () => {
    const breakdown = (initialDeposit * loanPeriod * 0.1).toFixed(2);
    setLoanBreakdown(breakdown);
  };

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="text-lg font-bold mb-2">Loan Calculator</h3>
      <div className="space-y-2">
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 w-full"
        />
        <input
          type="number"
          placeholder="Initial Deposit"
          value={initialDeposit}
          onChange={(e) => setInitialDeposit(e.target.value)}
          className="border p-2 w-full"
        />
        <input
          type="number"
          placeholder="Loan Period (Years)"
          value={loanPeriod}
          onChange={(e) => setLoanPeriod(e.target.value)}
          className="border p-2 w-full"
        />
        <button
          onClick={calculateLoan}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Calculate
        </button>
      </div>
      {loanBreakdown && (
        <p className="mt-4">
          Estimated Loan Breakdown: <strong>PKR {loanBreakdown}</strong>
        </p>
      )}
    </div>
  );
}
