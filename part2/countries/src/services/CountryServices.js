import axios from "axios";

const getCountries = () => {
  return axios.get(`https://restcountries.com/v3.1/name/japan`);
};

const countryService = { getCountries };

export default countryService;
