import axios from "axios";

const API = axios.create({
  baseURL: "https://placement-prep-9xgx.onrender.com/api",
});

export default API;
