import { TBookDetails, TRegister } from "@/types";
import axios from "axios";
import { handleApiError } from "./httpApiErrors";

export const bookUser = async (payload: TRegister) => {
  try {
    const { data } = await axios.post("https://integration-server.mooyi.africa/kayode/api/guest", payload);

    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};

export const getBookDetails = async () => {
  try {
    const { data } = await axios.get<TBookDetails[]>("https://integration-server.mooyi.africa/kayode/api/guests");

    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};
