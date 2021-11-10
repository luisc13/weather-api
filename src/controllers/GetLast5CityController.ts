import { Request, Response } from "express";
import GetLast5CityService from "../services/GetLast5CityService";

class GetLast5CityController {
  async handle(request: Request, response: Response){
    const service = new GetLast5CityService();

    const result = await service.execute();

    return response.json(result);
  }
}

export default GetLast5CityController;