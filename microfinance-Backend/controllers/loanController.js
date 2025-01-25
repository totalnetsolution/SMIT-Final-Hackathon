import Loan from "../models/Loan.js";

export const createLoanRequest = async (req, res) => {
  const { category, subcategory, amount, loanPeriod, guarantors } = req.body;
  try {
    const loan = new Loan({
      user: req.user.id,
      category,
      subcategory,
      amount,
      loanPeriod,
      guarantors,
    });
    await loan.save();
    res.status(201).json({ message: "Loan request submitted successfully", loan });
  } catch (error) {
    res.status(500).json({ message: "Failed to submit loan request", error });
  }
};

export const getUserLoans = async (req, res) => {
  try {
    const loans = await Loan.find({ user: req.user.id });
    res.status(200).json(loans);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch loans", error });
  }
};
