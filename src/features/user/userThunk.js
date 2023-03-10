import { checkForUnauthorizedResponse } from "../../utils/axios";
import axios from "axios";

const baseURL = "/api/v1";
//Register User
export const registerUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await axios.post(`${baseURL}/${url}`, user);
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
//Login User
export const loginUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await axios.post(`${baseURL}/${url}`, user);
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
