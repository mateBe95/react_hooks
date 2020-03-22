import React from "react";
import { Card, Col } from "antd";
import "./CoronaCard.scss"

export default function CoronaCard(props: any) {
  return (
    <>
      <Col 
      style={{ padding: 16 }}
      span={8}>
        <Card 
        title={props.title} 
        bordered={false} 
        hoverable
        >
          {props.content}
        </Card>
      </Col>
    </>
  );
}
