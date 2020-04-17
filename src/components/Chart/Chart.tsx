import React, { useEffect } from 'react';
import { useFetch } from '../api/useFetch';
import { Line, Bar } from 'react-chartjs-2';
import './Chart.css';

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
export default function Chart() {
  const { data } = useFetch<CoronaData>('https://covid19.mathdro.id/api/daily');
  const modifiedData =
    data &&
    data.length &&
    data.map((dailyData: any) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

  const lineChart =
    modifiedData && modifiedData.length ? (
      <Line
        data={{
          labels: modifiedData.map(({ date }) => date),
          datasets: [
            {
              data: modifiedData?.map(({ confirmed }) => confirmed),
              label: 'Zainfekowani',
              borderColor: '#3333ff',
              fill: true,
            },
            {
              data: modifiedData?.map(({ deaths }) => deaths),
              label: 'Liczba zgonów',
              borderColor: 'red',
              backgroundColor: 'rgba(255,0,0,0.5)',
              fill: true,
            },
          ],
        }}
      />
    ) : null;
  return (
    <div>
      <div>{lineChart}</div>
    </div>
  );
}
