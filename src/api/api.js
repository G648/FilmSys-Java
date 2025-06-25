import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/filmSys", // sua API com context-path
});

export default api;
