import React from "react";
import ReactDOM from "react-dom/client";
import { BarChart } from "./components";

const testData = [
  {
    date: "2024-02-01",
    pnl: 2000,
    perp_volume: 8000,
  },
  {
    date: "2024-02-02",
    pnl: -300,
    perp_volume: 4000,
  },
  {
    date: "2024-02-03",
    pnl: 2500,
    perp_volume: 9000,
  },
  {
    date: "2024-03-01",
    pnl: 1200,
    perp_volume: 6000,
  },
  {
    date: "2024-03-02",
    pnl: -800,
    perp_volume: 3500,
  },
  {
    date: "2024-09-02",
    pnl: -300,
    perp_volume: 4500,
  },
  {
    date: "2024-09-02",
    pnl: -600,
    perp_volume: 4500,
  },
  {
    date: "2024-09-02",
    pnl: -1100,
    perp_volume: 4500,
  },
  {
    date: "2024-06-01",
    pnl: 1600,
    perp_volume: 7200,
  },
  {
    date: "2024-06-02",
    pnl: -500,
    perp_volume: 4100,
  },
  {
    date: "2024-06-03",
    pnl: 2200,
    perp_volume: 8500,
  },
  {
    date: "2024-07-01",
    pnl: 1700,
    perp_volume: 7300,
  },
  {
    date: "2024-07-02",
    pnl: -700,
    perp_volume: 4300,
  },
  {
    date: "2024-09-02",
    pnl: -300,
    perp_volume: 4500,
  },
  {
    date: "2024-09-02",
    pnl: -600,
    perp_volume: 4500,
  },
  {
    date: "2024-09-02",
    pnl: -1100,
    perp_volume: 4500,
  },
  {
    date: "2024-09-02",
    pnl: -300,
    perp_volume: 4500,
  },
  {
    date: "2024-09-02",
    pnl: -600,
    perp_volume: 4500,
  },
  {
    date: "2024-09-02",
    pnl: -1100,
    perp_volume: 4500,
  },
  {
    date: "2024-09-02",
    pnl: 100,
    perp_volume: 4500,
  },
  {
    date: "2024-09-02",
    pnl: 300,
    perp_volume: 4500,
  },
  {
    date: "2024-09-03",
    pnl: 2600,
    perp_volume: 8900,
  },
  {
    date: "2024-10-01",
    pnl: 1900,
    perp_volume: 7600,
  },

  {
    date: "2024-11-03",
    pnl: 2900,
    perp_volume: 9300,
  },

  {
    date: "2024-12-03",
    pnl: 3000,
    perp_volume: 9400,
  },
];

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div
      style={{
        width: "800px",
        margin: "20px auto",
        background: "#1a1a1a",
        padding: 50,
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ color: "white", padding: "20px" }}>Bar Chart Demo</h1>
      <BarChart axisFontSize={14} data={testData} type="PnL" height={"300px"} />
    </div>
  </React.StrictMode>
);
