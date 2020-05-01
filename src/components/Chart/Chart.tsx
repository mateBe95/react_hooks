import React from 'react';
import { useFetch } from '../api/useFetch';
import { Line } from 'react-chartjs-2';
import './Chart.css';
import BarChart from '../BarChart/BarChart';

type CoronaValue = {
  total: number;
  value: number;
  detail: string;
};

type CoronaData = [
  {
    reportDate: string;
    confirmed: CoronaValue;
    recovered: CoronaValue;
    deaths: CoronaValue;
  }
];

export default function Chart({
  barData,
  country,
}: {
  barData: any;
  country: any;
}) {
  const { data } = useFetch<CoronaData>('https://covid19.mathdro.id/api/daily');
  const modifiedData = React.useMemo(() => {
    return (
      data &&
      data.length &&
      data.map((dailyData: any) => ({
        confirmed: dailyData.confirmed.total,
        deaths: dailyData.deaths.total,
        date: dailyData.reportDate,
      }))
    );
  }, [data]);

  const lineChart =
    modifiedData && modifiedData.length ? (
      <Line
        data={{
          labels: modifiedData.map(({ date }) => date),
          datasets: [
            {
              data: modifiedData?.map(({ confirmed }) => confirmed),
              label: 'Potwierdzone',
              borderColor: '#3333ff',
              fill: true,
            },
            {
              data: modifiedData?.map(({ deaths }) => deaths),
              label: 'Zgony',
              borderColor: 'red',
              backgroundColor: 'rgba(255,0,0,0.5)',
              fill: true,
            },
          ],
        }}
      />
    ) : null;

  const barChart =
    barData && barData.confirmed ? (
      <BarChart
        confirmed={barData.confirmed.value}
        recovered={barData.recovered.value}
        deaths={barData.deaths.value}
        country={country}
      />
    ) : null;

  return (
    <div>
      <div>{country ? barChart : lineChart}</div>
    </div>
  );
}
