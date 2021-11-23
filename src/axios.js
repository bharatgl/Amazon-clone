import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-b540c/us-central1/api", // cloud function
});

export default instance;
