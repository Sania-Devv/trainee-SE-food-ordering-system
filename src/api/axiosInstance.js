// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: "${BASE_URL}",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// Automatically attach token with every request
// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// export default axiosInstance;
