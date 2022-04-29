import { useState } from "react";
import { Button } from "./Button";
import { CountryDetails } from "./CountryDetails";

export const ExpandableCountryProfile = ({ country, widget }) => {
    const [show, setShowDetails] = useState(false);
    return (
      <li key={country.name.common}>
        {country.name.common}
        {""}
        <Button onClick={() => setShowDetails(!show)} text={"show"} />
        {show ? <CountryDetails country={country} widget={widget} /> : null}
      </li>
    );
  };