import { Router } from "express";
import CreateCityController from "./controllers/CreateCityController";
import GetLast5CityController from "./controllers/GetLast5CityController";
import GetTopCityController from "./controllers/GetTopCityController";
import GetWeatherApiController from "./controllers/GetWeatherApiController";

const router = Router();

router.post("/city", new CreateCityController().handle);
router.get("/city/last5", new GetLast5CityController().handle);
router.get("/weather", new GetWeatherApiController().handle);
router.get("/city/top", new GetTopCityController().handle);

export default router;