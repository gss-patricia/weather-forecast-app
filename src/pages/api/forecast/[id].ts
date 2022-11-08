import { NextApiRequest, NextApiResponse } from "next";
import { config } from "../../../config/default";
import { IHttp, Http } from "../../../shared/lib/httpClient";
import { Region, ForecastResponse } from "../../../shared/types";

const http: IHttp = Http();
const API_URL = config.publicRuntimeConfig.endpoints.API;

type ErrorMessage = {
  message: string;
};

const handler = async (
  request: NextApiRequest,
  response: NextApiResponse<ForecastResponse | ErrorMessage>
) => {
  const { id } = request.query
  const url = `${API_URL}/forecast/meteorology/cities/daily/${id}.json`;
  try {
    const data = await http.get(url);
    return response.status(200).json({ data });
  } catch (error) {
    const message = "Unable to find the forecast";
    return response.status(500).json({ message });
  }
};

export default handler;
