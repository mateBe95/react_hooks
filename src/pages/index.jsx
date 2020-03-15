import React, { useEffect, useState } from "react";

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
    <div>
      <Stats></Stats>
    </div>
  );
}
