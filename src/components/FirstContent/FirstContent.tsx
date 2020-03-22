import React from "react";
import CoronaCard from "../Card/CoronaCard";
import "./FirstContent.scss";
import {Row} from 'antd';
import {useFetch} from "./hook";


export default function FirstContent() {
    const {data, loading} = useFetch('https://covid19.mathdro.id/api/countries/POLAND/');

    console.log(data)
    if (loading) return <p>Loading...</p>
    return (
        <div className="site-card-wrapper">
            <Row gutter={16}>
     <CoronaCard
        title={"Obecnie zarażonych"}
        content={data?.confirmed.value}
        />
           <CoronaCard
        title={"Wszystkich wyleczonych"}
        content={data?.recovered.value}
        />
           <CoronaCard
        title={"Zgony"}
        content={data?.deaths.value}
        />
      </Row>
    </div>
  );
}
