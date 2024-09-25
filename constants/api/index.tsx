import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
const axiosApi = axios.create({});
axiosApi.interceptors.request.use(
  async (config) => {
    const savedToken = await AsyncStorage.getItem("tokenApp");
    const authToken = savedToken;

    if (authToken) {
      config.headers.Authorization = `${authToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export { axiosApi };
