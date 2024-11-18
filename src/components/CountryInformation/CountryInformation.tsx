import { useEffect, useState } from 'react';
import './CountryInformation.css';
import axios from 'axios';

interface CountryInformationProps {
    name: string,
    capital: string,
    region: string,
    population: string,
    flags: string,
    borders: string[],
}

const CountryInformation:React.FC<CountryInformationProps> = ({ name, capital, region, population, flags, borders }) => {
  const [borderCountryes, setBorderCountryes] = useState<string[]>([]);

  useEffect(() => {
    const getBorderCountryes = async () => {
      setBorderCountryes([]);
      const borderCountries = [];
      const code = borders.join(',');

      if (code.length > 0) {
        const response = await axios.get(`https://restcountries.com/v3.1/alpha?codes=${code}`);
        const responseData = response.data;
        
        for (const data of responseData) {
          borderCountries.push(data.name.common);
        }
        setBorderCountryes(borderCountries);     
      } else {
        setBorderCountryes(['It has no land borders with other countries']);
      }
    };
    getBorderCountryes();
    
  }, [borders])

  return (
    <div className='information_block'>
      <div className='basic_information'>
        <h2 className='country_name'>{name}</h2>
        <p className='country_capital'>Capital: {capital}</p>
        <p className='country_region'>Region: {region}</p>
        <p className='country_population'>Population: {population}</p>
      </div>
      <img src={flags} alt={name} className='country_flag' />
      <div className='additional_information'>
        <h3 className='bordering_states'>Bordering countries:</h3>
        <ul>
          {borderCountryes.map((countryes, index) => {
            return <li key={index} className='country_border'>{countryes}</li>
          })}
        </ul>
      </div>
    </div>
  )
};

export default CountryInformation;