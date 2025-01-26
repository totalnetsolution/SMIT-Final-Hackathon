import api from "../utils/api";

// Register a new user
export const registerUser = async (userData) => {
  return api.post("http://localhost:3432/api/auth/register", userData);
};

// Login a user
export const loginUser = async (credentials) => {
  return api.post("http://localhost:3432/api/auth/login", credentials);
};
