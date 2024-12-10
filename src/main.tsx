import React from "react";
import ReactDOM from "react-dom/client";
import { BarChart } from "./components";

const testData = [
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
