import React from "react";
import ReactDOM from "react-dom/client";
import { BarChart, LineChart } from "./components";

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

const lineData = [
  { date: "2024-01-01", pnl: 1000, perp_volume: 5000 },
  { date: "2024-01-02", pnl: -500, perp_volume: 3000 },
  { date: "2024-01-03", pnl: 1500, perp_volume: 7000 },
  { date: "2024-01-04", pnl: -800, perp_volume: 4000 },
  { date: "2024-01-05", pnl: 2000, perp_volume: 6000 },
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
      <h1 style={{ color: "white", padding: "20px", marginTop: "100px" }}>
        Line Chart Demo
      </h1>
      <LineChart
        data={lineData}
        type="PnL"
        linePositiveColor="rgb(255, 140, 0)"
        lineNegativeColor="rgb(0, 122, 255)"
        fillPositiveColor="rgba(255, 140, 0, 0.2)"
        fillNegativeColor="rgba(0, 122, 255, 0.2)"
        height="300px"
        lineWidth={3}
        lineTension={0.4}
        pointHoverRadius={6}
        pointBorderColor="#FFFFFF"
        pointBorderWidth={2}
        tooltipBackground="rgba(40, 44, 52, 0.95)"
        tooltipBorderColor="#FF8C00"
        tooltipBorderWidth={2}
        tooltipCornerRadius={6}
        tooltipPadding={12}
        gridColor="rgba(255, 140, 0, 0.1)"
        axisColor="#FFF"
        axisFontSize={12}
        enableAnimation={true}
        animationDuration={1000}
        enableNowLabel={true}
        nowLabelText="CURRENT"
      />
    </div>
  </React.StrictMode>
);
