import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getPerson = () => {
  return axios.get(baseUrl);
};

const addNewPerson = (newPerson) => {
  return axios.post(baseUrl, newPerson);
};

const deletePerson = (id) => {
  return axios.delete(`${baseUrl}/${id}`)
};

const changePerson = (id, newPerson) => {
  return axios.put(`${baseUrl}/${id}`, newPerson)
}

const phoneServices = { getPerson, addNewPerson, deletePerson, changePerson };

export default phoneServices;
