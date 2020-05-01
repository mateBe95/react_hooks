import React from 'react';
import Chart from '../Chart/Chart';
import CountryPicker from '../ContryPicker/CountryPicker';
import { useFetch } from '../api/useFetch';

export default function SecondContent() {
  const [country, setCountry] = React.useState('');
  const { data } = useFetch<any>('https://covid19.mathdro.id/api/', country);

  const handleCountryChange = async (country: string) => {
    if (country) {
      await setCountry(country);
    }
  };

  return (
    <div>
      <CountryPicker onCountryChange={handleCountryChange} />
      <Chart barData={data} country={country} />
    </div>
  );
}
