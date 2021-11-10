import axios from 'axios'

const baseURL = "https://api.openweathermap.org/data/2.5";

const api = axios.create({
  baseURL,
});

export default api;