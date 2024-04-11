import axios from "axios";

export async function findSchemaByBusinessUnitCode(businessUnitCode: string): Promise<object[]> {
    const response = await axios.post<object[]>(
        `${import.meta.env.VITE_API_URL}/api/schema/loadSchema`,
        {bu_code: businessUnitCode}
    )

    return response.data
}