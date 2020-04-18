import React from 'react';
import Chart from '../Chart/Chart';
import CountryPicker from '../ContryPicker/CountryPicker';
import { useFetch } from '../api/useFetch';

type CoronaValue = {
  total: number;
  value: number;
  detail: string;
};

type CoronaData = [
  {
    confirmed: CoronaValue;
    recovered: CoronaValue;
    deaths: CoronaValue;
  }
];

export default function SecondContent() {
  const [country, setCountry] = React.useState('');
  const { data } = useFetch<CoronaData>(
    `https://covid19.mathdro.id/api/countries/${country}`
  );

  const handleCountryChange = async (country: string) => {
    debugger;
    if (country) {
      await setCountry(country);
    }
  };

  return (
    <div>
      <CountryPicker onCountryChange={handleCountryChange} />
      <Chart barData={undefined} country={country} />
    </div>
  );
}
