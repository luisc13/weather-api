import { Request, Response } from "express";
import GetTopCityService from "../services/GetTopCityService";

class GetLast5CityController {
  async handle(request: Request, response: Response){
    const service = new GetTopCityService();

    const result = await service.execute();

    return response.json(result);
  }
}

export default GetLast5CityController;