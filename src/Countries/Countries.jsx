import { useEffect, useState } from "react";
import "../App.css";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch(
      "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries"
    )
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.error(err));
  }, []);

  const filteredCountries = countries.filter((country) =>
    country?.common?.toLowerCase().includes(searchText.toLowerCase())
  );
  console.log(countries);
  return (
    <div>
      <input
        type="text"
        placeholder="Search for countries..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="searchInput"
      />

      <div className="countriesContainer">
        {filteredCountries.map((country, index) => {
          const flagSrc =
            country.png;
            //country.pn?.png ||
            //country.flags?.svg;

          return (
            <div className="countryCard" key={index}>
              <img src={flagSrc} alt={country.common} />
              <p>{country.common}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
