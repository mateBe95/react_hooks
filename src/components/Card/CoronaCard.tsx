import React from 'react';
import { Card, Col } from 'antd';
import './CoronaCard.scss';
import CountUp from 'react-countup';

export default function CoronaCard({
  loading,
  title,
  content,
  lastUpdate,
}: {
  loading: boolean;
  lastUpdate: string;
  title: string;
  content: any;
}) {
  return (
    <>
      <Col style={{ padding: 16 }} span={8}>
        <Card loading={loading} title={title} bordered={false} hoverable>
          <h2>
            <CountUp start={0} end={content} duration={2.0} separator="," />
          </h2>
          <div>{new Date(lastUpdate).toDateString()}</div>
        </Card>
      </Col>
    </>
  );
}
