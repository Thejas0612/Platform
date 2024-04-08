import axios from "axios";

export async function findSchemaByBusinessUnitCode(businessUnitCode: string): Promise<object[]> {
    const response = await axios.post<object[]>(
        `${process.env.REACT_APP_API_URL}/api/schema/loadSchema`,
        {bu_code: businessUnitCode}
    )

    return response.data
}