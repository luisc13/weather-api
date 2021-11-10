import prismaClient from "../prisma";
import { io } from "../app";

class CreateCityService {
  async execute(
    id: number,
    name: string,
    country: string,
    temp: number,
    humidity: number,
    weather: string,
    count: number
  ) {
    try {
      const city = await prismaClient.city.create({
        data: {
          id,
          name,
          country,
          temp,
          humidity,
          weather,
          count,
        },
      });
      const infoWS = {
        id: city.id,
        name: city.name,
        country: city.country,
        temp: city.temp,
        humidity: city.humidity,
        weather: city.weather,
        count: city.count,
      };
  
      io.emit("new_city", infoWS);
      
      return city;
      
    } catch (err) {
      return (err.message);
    }
  }
  async update(
    id: number,
    name: string,
    country: string,
    temp: number,
    humidity: number,
    weather: string,
    count: number
  ) {
    const city = await prismaClient.city.update({
      where: {
        id: id,
      },
      data: {
        id,
        name,
        country,
        temp,
        humidity,
        weather,
        count,
      },
    });
    return city;
  }
}

export default CreateCityService;
