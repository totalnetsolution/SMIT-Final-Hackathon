import LoanCard from "../components/LoanCard";
import LoanCalculator from "../components/LoanCalculator";

const loanCategories = [
  {
    title: "Wedding Loans",
    subcategories: ["Valima", "Furniture", "Valima Food", "Jahez"],
    maxLoan: 500000,
    period: 3,
  },
  {
    title: "Home Construction Loans",
    subcategories: ["Structure", "Finishing"],
    maxLoan: 1000000,
    period: 5,
  },
  // Add more categories...
];

export default function LandingPage() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to Saylani Microfinance</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {loanCategories.map((loan) => (
          <LoanCard key={loan.title} {...loan} />
        ))}
      </div>
      <LoanCalculator />
    </div>
  );
}
