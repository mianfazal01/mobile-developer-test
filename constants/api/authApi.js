import { axiosApi } from ".";
import { BaseUrl, Login, Register } from "../endpoint";

export const LoginAccount = async (values) => {
  console.log("email,password :>> ", email, password);
  const { email, password } = values;
  const response = await axiosApi.post(`${BaseUrl}${Login}`, {
    email,
    password,
  });

  return response.data;
};
export const RegisterAccount = async (values) => {
  const { email, password } = values;
  const response = await axiosApi.post(`${BaseUrl}${Register}`, {
    email,
    password,
  });

  return response.data;
};
