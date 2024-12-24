
import { useEffect, useState } from "react";
import "./App.css";
import { ICountry, ICountryInformation } from "./interfaces/ICountry";
import fetchData from "./api/api";
import Countries from "./components/Countries/Countries";
import CountryInformation from "./components/CountryInformation/CountryInformation";

function App() {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [country, setCountry] = useState<ICountryInformation[]>([]);

  const [value, setValue] = useState(true);

  useEffect(() => {
    const getCountries = async () => {
      const { data, error } = await fetchData<ICountry[]>(
        "https://restcountries.com/v3/all"
      );

      if (data) {
        setCountries(data);
      }
      if (error) {
        console.error(error);
      }
    };
    getCountries();
  }, []);

  const getCountry = async (name: string) => {
    const { data, error } = await fetchData<ICountryInformation[]>(
      `https://restcountries.com/v3/name/${name}`
    );

    if (data) {
      setCountry(data);
    }
    if (error) {
      console.error(error);
    }
    setValue(false);
  }

  return (
    <div className="container">
      <div className="wraper">
        <ul className="countries_list">
          {countries.map((country, index) => {
            return (
              <Countries name={country.name.common} onClick={getCountry} key={index} />
            );
          })}
        </ul>
        <div className="country_card">
        {value 
          ? (<h1 className="title">Select country</h1>) 
          : (country.map((value, index) => {
              return (
                <CountryInformation
                  key={index}
                  name={value.name.common}
                  capital={value.capital}
                  region={value.region}
                  population={value.population}
                  flags={value.flags[0].toString()}
                  borders={[value.borders]}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default App;