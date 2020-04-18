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
  const [modifiedData, setModifiedData] = React.useState(null);
  const { data } = useFetch<CoronaData>(
    `https://covid19.mathdro.id/api/countries/${country}`
  );

  const modifiedBarChartData =
    data &&
    data.length &&
    data.map((dailyData: any) => ({
      confirmed: dailyData.confirmed.value,
      deaths: dailyData.deaths.value,
      recovered: dailyData.recovered.value,
    }));

  const handleCountryChange = async (country: string) => {
    debugger;
    if (country) {
      await setCountry(country);
    }
  };

  return (
    <div>
      <CountryPicker onCountryChange={handleCountryChange} />
      <Chart barData={modifiedData} country={country} />
    </div>
  );
}
