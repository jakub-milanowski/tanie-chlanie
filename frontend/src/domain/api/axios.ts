import axios from "axios";

const axiosApi = axios.create({
  baseURL: "http://backend:8000",
  responseType: "json"
});

axiosApi.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { axiosApi };
