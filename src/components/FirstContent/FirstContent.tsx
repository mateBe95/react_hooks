import React from 'react';
import CoronaCard from '../Card/CoronaCard';
import './FirstContent.scss';
import { Row } from 'antd';
import { useFetch } from '../api/useFetch';
import BarChart from '../BarChart/BarChart';

type CoronaValue = {
  value: number;
  detail: string;
};

type CoronaDataPL = {
  lastUpdate: any;
  confirmed: CoronaValue;
  recovered: CoronaValue;
  deaths: CoronaValue;
};

export default function FirstContent() {
  const { data, loading } = useFetch<CoronaDataPL>(
    'https://covid19.mathdro.id/api/countries/POLAND/'
  );

  return (
    <>
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <CoronaCard
            loading={loading}
            title="Obecnie zarażonych"
            content={data?.confirmed.value}
            lastUpdate={data?.lastUpdate}
          />
          <CoronaCard
            loading={loading}
            title="Wszystkich wyleczonych"
            content={data?.recovered.value}
            lastUpdate={data?.lastUpdate}
          />
          <CoronaCard
            loading={loading}
            title="Zgony"
            content={data?.deaths.value}
            lastUpdate={data?.lastUpdate}
          />
        </Row>
      </div>
      <Row gutter={16}>
        <BarChart
          confirmed={data?.confirmed.value}
          recovered={data?.recovered.value}
          deaths={data?.deaths.value}
          country={'Polsce'}
        />
      </Row>
    </>
  );
}
