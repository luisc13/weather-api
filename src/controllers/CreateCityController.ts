import { Request, Response } from "express";
import prismaClient from "../prisma";
import CreateCityService from "../services/CreateCityService";

class CreateCityController {
  async handle(request: Request, response: Response) {
    const {id, name, country, temp, humidity, weather, count} = request.body;
    const city = await prismaClient.city.findFirst({
      where: {
        id: id,
      }
    });

    if (!city) {
      const service = new CreateCityService();
      const result = await service.execute(id, name, country, temp, humidity, weather, count);
      return response.json(result);
    } else {
      const service = new CreateCityService();
      const result = await service.update(city.id = id, city.name = name, city.country = country, city.temp = temp, city.humidity = humidity, city.weather = weather, city.count = city.count + 1);
      return response.json(result);
    }
  }
}

export default CreateCityController;