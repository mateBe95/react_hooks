import React from 'react';
import { Bar } from 'react-chartjs-2';

export default function BarChart({
  confirmed,
  recovered,
  deaths,
  country,
}: {
  confirmed: number | undefined;
  recovered: number | undefined;
  deaths: number | undefined;
  country: string;
}) {
  return (
    <Bar
      data={{
        labels: ['Potwierdzone', 'Ozdrowienia', 'Zgony'],
        datasets: [
          {
            labels: 'People',
            backgroundColor: [
              'rgba(255,166,3,0.76)',
              'rgba(3,255,139,1)',
              'rgba(249,3,83,1)',
            ],
            data: [confirmed, recovered, deaths],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Obecny stan w  ${country}` },
      }}
    />
  );
}
