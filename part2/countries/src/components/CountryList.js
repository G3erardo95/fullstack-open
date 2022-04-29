import { CountryDetails } from "./CountryDetails";
import { ExpandableCountryProfile } from "./ExpandableCountry";

export const CountryList = ({ searchResult }) => {
  if (searchResult.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else if (searchResult.length === 1) {
    return (
      <>
        <CountryDetails country={searchResult[0]} />
      </>
    );
  } else if (searchResult.length <= 10 || searchResult.length > 1) {
    return (
      <div>
        {searchResult.map((country) => (
          <ExpandableCountryProfile
            key={country.name.common}
            country={country}
          />
        ))}
      </div>
    );
  }
};
