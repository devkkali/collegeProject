import axios from "axios";

const api = axios.create({
  baseURL: "/api/resources",
});

export default api;