import axios from "axios";

module.exports = (baseURL: any) =>
  axios.create({
    baseURL,
    timeout: 5000,
  });
