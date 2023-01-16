import axios from "axios";

const axiosApi = axios.create({
  baseURL: "/axios"
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
