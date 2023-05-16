import axios from "axios";

const axiosBase = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export default axiosBase;
