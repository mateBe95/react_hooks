import React from "react";
import CoronaCard from "../Card/CoronaCard";
import "./FirstContent.scss";
import { Row } from 'antd';
const data = [
  {
    title: "Wszystkie zarażenia",
    content: "5000"
  },
  {
    title: "Obecnie zarażonych",
    content: "90"
  },
  {
    title: "Zgony",
    content: "8"
  },
  {
    title: "Wszystkich wyleczonych",
    content: "5"
  },
  {
    title: "Wszystkie testy",
    content: "15900"
  },
  {
    title: "Hospitalizowani",
    content: "888"
  },
  {
    title: "Kwarantanna domowa",
    content: "45999"
  },
  {
    title: "Nadzór epidemologiczny",
    content: "54900"
  }
];

export default function FirstContent() {
  return (
    <div className="site-card-wrapper">
     <Row gutter={16}>
      {data.map((card: any) => (
        <CoronaCard 
        title={card.title}
        content={card.content}
        />
      ))}
      </Row>
    </div>
  );
}
