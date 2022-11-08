import { Region, RegionsResponse } from "../../shared/types";
import APIClient from "../../shared/lib/apiClient";

export async function fetchRegions(): Promise<Region[]> {
    const {regions} = await APIClient.get<RegionsResponse>('/regions').then(res => res.data);

    return regions.data || []
}
  