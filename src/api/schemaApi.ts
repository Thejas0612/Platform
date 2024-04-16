import axios from "axios";
import { environment } from "../config/environment";

export async function findSchemaByBusinessUnitCode(businessUnitCode: string): Promise<object[]> {
  const response = await axios.post<object[]>(
    `${environment.VITE_API_URL}/api/schema/loadSchema`,
    { bu_code: businessUnitCode }
  );

  return response.data;
}