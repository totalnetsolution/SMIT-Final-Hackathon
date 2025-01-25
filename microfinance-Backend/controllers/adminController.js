import Loan from "../models/Loan.js";

export const getAllApplications = async (req, res) => {
  try {
    const applications = await Loan.find().populate("user", "name email");
    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch applications", error });
  }
};

export const updateApplicationStatus = async (req, res) => {
  const { id } = req.params;
  const { status, tokenNumber } = req.body;

  try {
    const application = await Loan.findByIdAndUpdate(
      id,
      { status, tokenNumber },
      { new: true }
    );
    res.status(200).json(application);
  } catch (error) {
    res.status(500).json({ message: "Failed to update application status", error });
  }
};
