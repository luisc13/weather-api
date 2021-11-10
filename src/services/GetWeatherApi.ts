import api from './OpenWeatherApi';

class GetWeatherApi {
  async getWeather(city: string){
    try {
      const response = await api.get("/weather", {
        params: {
          q: city,
          appid: process.env.OPEN_WEATHER_API_KEY,
          lang: "pt",
        },
      });
      return response.data;
      
    } catch (err) {
      return err.message
    }
  }
}

export default GetWeatherApi;
