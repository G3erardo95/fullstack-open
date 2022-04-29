import { useState, useEffect } from "react";
import countryService from "../services/CountryServices";

export const Widget = ({country}) => {
  const [widget, setNewWidget] = useState([]);

  const lat = country.latlng[0];
  const lon = country.latlng[1];

  const key = "e5a124effce4061071194b5fa936b1fe";

  useEffect(() => {
    countryService.getWeather(lat, lon, key).then((response) => {
      setNewWidget(response.data);
    });
  }, [lat, lon])

    return(
        <div>
          <h2>Weather in: {country.capital}</h2>
          <p>Temperature: {widget.main?.temp} Celsius</p>
          <p>Wind: {widget.wind?.speed} m/s</p>
      </div>
    )

}
