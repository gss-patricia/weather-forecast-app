import { NextApiRequest, NextApiResponse } from "next";
import { config } from "../../config/default";
import { IHttp, Http } from "../../shared/lib/httpClient";
import { Region, RegionsResponse } from "../../shared/types";

const http: IHttp = Http();
const API_URL = config.publicRuntimeConfig.endpoints.API;

type ErrorMessage = {
  message: string;
};

const handler = async (
  request: NextApiRequest,
  response: NextApiResponse<RegionsResponse | ErrorMessage>
) => {
  const url = `${API_URL}/distrits-islands.json`;
  try {
    const regions = await http.get(url);
    return response.status(200).json({ regions });
  } catch (error) {
    const message = "Unable to find the region";
    return response.status(500).json({ message });
  }
};

export default handler;
