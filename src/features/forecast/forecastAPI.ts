import { Forecast, ForecastResponse } from "../../shared/types";
import APIClient from "../../shared/lib/apiClient";

export async function fetchForecast(id): Promise<Forecast[]> {
    const { data } = await APIClient.get<ForecastResponse>(`/forecast/${id}`).then(res => res.data);

    return data;
}
