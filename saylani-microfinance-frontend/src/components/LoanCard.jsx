// src/components/LoanCard.jsx
export default function LoanCard({ title, subcategories, maxLoan, period }) {
    return (
      <div className="border rounded-lg p-4 shadow-lg">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <ul className="text-sm mb-4">
          {subcategories.map((sub) => (
            <li key={sub} className="list-disc ml-5">{sub}</li>
          ))}
        </ul>
        <p className="text-sm">
          Max Loan: <strong>PKR {maxLoan}</strong> | Period: <strong>{period} years</strong>
        </p>
      </div>
    );
  }
  