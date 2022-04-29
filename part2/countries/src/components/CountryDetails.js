import { Widget } from "./WeatherWidget";

export const CountryDetails = ({country}) => {
  return (
    <div key={country.name.common}>
      <h2>{country.name.official}</h2>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area}</p>
      <h3>languages</h3>
      <ul>
        {Object.values(country.languages).map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt="Flag"></img>
      <Widget country={country} />
    </div>
  );
};
