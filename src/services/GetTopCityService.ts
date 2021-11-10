import prismaClient from "../prisma";

class GetTopCityService {
  async execute() {
    try {
      const cities = await prismaClient.city.findFirst({
        orderBy: {
          count: "desc"
        }
      });
      return cities;
    } catch (err) {
      return err.message
    }
  }
}

export default GetTopCityService;