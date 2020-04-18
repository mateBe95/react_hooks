import React from 'react';
import Chart from '../Chart/Chart';
import CountryPicker from '../ContryPicker/CountryPicker';

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

  const handleCountryChange = async (country: string) => {
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
