import { axiosApi } from ".";
import { BaseUrl, getUserList } from "../endpoint";

export const getAllUserRecordApi = async () => {
  const response = await axiosApi.get(`${BaseUrl}${getUserList}`);

  return response.data;
};
