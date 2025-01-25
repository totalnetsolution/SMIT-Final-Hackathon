import axios from "axios";

const registerUser = async (data) => {
  const response = await axios.post("http://localhost:3432/api/auth/register", data);
  return response.data;
};