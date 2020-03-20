import React, { useEffect, useState } from "react";
import SideNav from "../components/SideNav/SideNav";
import { Layout } from "antd";
import 'antd/dist/antd.css';


function useStats() {
  const [stats, setStats] = useState();
  useEffect(() => {
    async function fetchData() {
      const data = await fetch("https://covid19.mathdro.id/api").then(res =>
        res.json()
      );
      setStats(data);
    }
    fetchData();
  }, []);
  return stats;
}

function Stats() {
  const stats = useStats();
  console.log(stats);
  return (
    <div>
      <p>Stats: </p>
    </div>
  );
}

export default function IndexPage() {
  return (
      <Layout>
        <SideNav/>
      </Layout>
  );
}
