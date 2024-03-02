import axios from "axios";

export async function findSchemaByBusinessUnitCode(businessUnitCode: string): Promise<object[]> {
    const response = await axios.post<object[]>(
        "https://webapp-z-autosol-msolst-n-001.azurewebsites.net/api/schema/loadSchema",
        {bu_code: businessUnitCode}
    )

    return response.data
}