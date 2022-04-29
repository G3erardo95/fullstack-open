import React, { useState, useEffect } from "react";
import countryService from "./services/CountryServices";
import { CountryList } from "./components/CountryList";

const App = () => {
  const [countries, setNewCountries] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    countryService.getCountries().then((response) => {
      setNewCountries(response.data);
    });
  }, []);
;

  const handleSearch = (event) => {
    event.preventDefault();
    const filterSearch = (s) =>
      countries.filter((f) => f.name.common.toLowerCase().includes(s));
    setSearchResult(filterSearch(event.target.value));
    console.log(searchResult);
  };

  return (
    <>
      <form>
        find countries<input onChange={handleSearch}></input>
      </form>
      <CountryList
        searchResult={searchResult}
      ></CountryList>
    </>
  );
};

export default App;
