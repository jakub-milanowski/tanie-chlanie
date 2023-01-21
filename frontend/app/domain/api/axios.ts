import axios from "axios";

const axiosApi = axios.create({
  baseURL: "http://0.0.0.0:8000"
});

axiosApi.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);

export { axiosApi };
