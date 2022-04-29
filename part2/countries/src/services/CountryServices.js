import axios from "axios";

const getCountries = () => {
  return axios.get(`https://restcountries.com/v3.1/all`);
};

const getWeather = (lat, lon, key) => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`
  );
};

const countryService = { getCountries, getWeather };

export default countryService;
