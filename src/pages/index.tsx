import React, { useEffect, useState } from "react";
import SideNav from "../components/SideNav";
import { Layout } from "antd";
import 'antd/dist/antd.css';
import AppMenu from "../components/AppMenu";
import AppHeader from "../components/AppHeader";
import AppContent from "../components/AppContent";

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
        <SideNav>
          <AppMenu />
        </SideNav>
        <Layout className="site-layout">
          <AppHeader />
          <AppContent />
        </Layout>
      </Layout>
  );
}
