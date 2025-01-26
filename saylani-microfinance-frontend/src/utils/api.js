import axios from "axios";

const api = {
  get: async (url, config = {}) => {
    try {
      const response = await axios.get(url, config);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
    }
  },
  post: async (url, data, config = {}) => {
    try {
      const response = await axios.post(url, data, config);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
    }
  },
  put: async (url, data, config = {}) => {
    try {
      const response = await axios.put(url, data, config);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
    }
  },
  delete: async (url, config = {}) => {
    try {
      const response = await axios.delete(url, config);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
    }
  },
};

// Error handler
const handleAxiosError = (error) => {
  console.error("API Error:", error.response?.data || error.message);
  throw new Error(error.response?.data?.message || "Something went wrong.");
};

export default api;

