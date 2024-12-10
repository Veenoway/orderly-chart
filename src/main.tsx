import React from "react";
import ReactDOM from "react-dom/client";
import { BarChart } from "./components";

const testData = [
  {
    date: "2024-01-01",
    pnl: 1000,
    perp_volume: 5000,
  },
  {
    date: "2024-01-02",
    pnl: -500,
    perp_volume: 3000,
  },
  {
    date: "2024-01-03",
    pnl: 1500,
    perp_volume: 7000,
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
      }}
    >
      <h1 style={{ color: "white", padding: "20px" }}>Chart Demo</h1>
      <BarChart
        data={testData}
        type="PnL"
        height={"200px"}
        barPositiveColor="#00ff00"
        barNegativeColor="#ff0000"
        tooltipBackground="rgba(0, 0, 0, 0.9)"
        gridDisplay={true}
        enableAnimation={true}
        animationDuration={500}
        axisFontSize={12}
        enableNowLabel={true}
        nowLabelColor="#FFF"
      />
    </div>
  </React.StrictMode>
);
