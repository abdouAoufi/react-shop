import axios from "axios";

const AXIOS_INSTANCE = axios.create({
  baseURL: "https://reqq-ress.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default AXIOS_INSTANCE;
