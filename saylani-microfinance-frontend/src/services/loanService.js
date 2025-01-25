import api from "./api";

// Fetch all loan categories
export const fetchLoanCategories = async () => {
  return api.get("http://localhost:3432/api/loans/categories");
};

// Submit a loan application
export const submitLoanApplication = async (loanData) => {
  return api.post("http://localhost:3432/api/loans/apply", loanData);
};
