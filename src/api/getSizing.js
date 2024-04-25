import axios from "axios";
import { environment } from "../config/environment";



export const getSizing = async (data) => {
const BASE_URL = `${environment.VITE_API_URL}/api/sizing?sizingData=${JSON.stringify(data)}`;

  const response = await axios.get(BASE_URL);
  return response.data;
};