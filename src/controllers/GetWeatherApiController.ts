import { Request, Response } from "express";
import GetWeatherApi from "../services/GetWeatherApi";

class GetWeatherApiController {
  async handle(request: Request, response: Response){
    const { city } = request.query;

    const getWeatherApi = new GetWeatherApi();

    const data = await getWeatherApi.getWeather(String(city));

    return response.json(data);
  }
}


export default GetWeatherApiController;