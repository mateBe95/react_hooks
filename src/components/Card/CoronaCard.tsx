import React from "react";
import { Card, Col } from "antd";
import "./CoronaCard.scss"

export default function CoronaCard({loading, title, content}: {loading: boolean, title: string, content: any}) {
  return (
    <>
      <Col 
      style={{ padding: 16 }}
      span={8}>
        <Card 
        loading={loading}
        title={title} 
        bordered={false} 
        hoverable
        >
          {content}
        </Card>
      </Col>
    </>
  );
}
