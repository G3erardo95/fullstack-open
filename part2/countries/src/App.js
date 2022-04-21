import React, { useState, useEffect } from "react";
import countryService from "./services/CountryServices";

const App = () => {
  const [countries, setNewCountries] = useState([]);

  useEffect(() => {
    countryService.getCountries().then((response) => {
      setNewCountries(response.data);
    });
  }, []);

  return (
    <>
      <form>
        find countries<input type="text" name="country"></input>
      </form>
      <div>
        {countries.map((country) => (
          <p key={country.name}>
            {country.name.common} <button> For later </button>
          </p>
        ))}
      </div>
    </>
  );
};

export default App;
