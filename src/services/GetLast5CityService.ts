import prismaClient from "../prisma";

class GetLast5CityService {
  async execute() {
    try {
      const cities = await prismaClient.city.findMany({
        take: 5,
        orderBy: {
          created_At: "desc"
        }
      });
      return cities;
    } catch (err) {
      return err.message;
    }
  }
}

export default GetLast5CityService;