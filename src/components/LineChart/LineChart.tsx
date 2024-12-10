import Chart, { Color } from "chart.js/auto";
import { useEffect, useMemo, useRef } from "react";
import { LineChartProps } from "src/types";

export const LineChart = ({
  data,
  type,
  // Dimensions
  height = "177px",

  // Line styles
  linePositiveColor = "rgb(14, 203, 129)",
  lineNegativeColor = "rgb(234, 57, 67)",
  lineWidth = 2,
  lineTension = 0.5,

  // Fill styles
  fillPositiveColor = "rgba(14, 203, 129, 0.2)",
  fillNegativeColor = "rgba(234, 57, 67, 0.2)",
  fillOpacity = 0.2,

  // Point styles
  pointRadius = 0,
  pointHoverRadius = 4,
  pointBorderWidth = 2,
  pointBorderColor = "#FFFFFF60",

  // Tooltip styles
  tooltipBackground = "rgba(30, 30, 30, 0.8)",
  tooltipTitleColor = "#FFFFFF",
  tooltipBodyColor = "#FFFFFF",
  tooltipBorderColor = "#836EF9",
  tooltipBorderWidth = 1,
  tooltipDisplayColors = false,
  tooltipPadding = 10,
  tooltipCornerRadius = 10,

  // Grid styles
  gridDisplay = false,
  gridColor = "rgba(255, 255, 255, 0.03)",

  // Axis styles
  axisColor = "#FFFFFF60",
  axisFontSize = 10,
  axisFontFamily = "Arial",
  axisPadding = 5,

  // Plugin options
  enableNowLabel = true,
  nowLabelText = "now",

  // Chart options
  enableAnimation = true,
  animationDuration = 750,
}: LineChartProps) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const labels = useMemo(
    () => data?.map((entry) => new Date(entry.date).toLocaleDateString()) || [],
    [data]
  );

  const chartData = useMemo(
    () =>
      data?.map((entry) => {
        switch (type) {
          case "PnL":
          case "Cumulative PnL":
            return entry.pnl;
          case "Volume":
            return entry.perp_volume;
          default:
            return entry.pnl;
        }
      }) || [],
    [data, type]
  );

  useEffect(() => {
    if (chartInstance.current) {
      (chartInstance.current as any).destroy();
    }

    const ctx = (chartRef.current as any).getContext("2d");

    const createGradient = (ctx: CanvasRenderingContext2D, chart: any) => {
      const gradient = ctx.createLinearGradient(
        0,
        chart.chartArea.top,
        0,
        chart.chartArea.bottom
      );
      const centerPoint = chart.scales.y.getPixelForValue(0);
      const totalHeight = chart.chartArea.bottom - chart.chartArea.top;

      const greenStop = (centerPoint - chart.chartArea.top) / totalHeight;
      const redStop = (centerPoint - chart.chartArea.top) / totalHeight;

      gradient.addColorStop(0, fillPositiveColor);
      gradient.addColorStop(greenStop, fillPositiveColor);
      gradient.addColorStop(redStop, fillNegativeColor);
      gradient.addColorStop(1, fillNegativeColor);

      return gradient;
    };

    const createBorderGradient = (
      ctx: CanvasRenderingContext2D,
      chart: any
    ) => {
      const gradient = ctx.createLinearGradient(
        0,
        chart.chartArea.top,
        0,
        chart.chartArea.bottom
      );
      const centerPoint = chart.scales.y.getPixelForValue(0);
      const totalHeight = chart.chartArea.bottom - chart.chartArea.top;

      const greenStop = (centerPoint - chart.chartArea.top) / totalHeight;
      const redStop = (centerPoint - chart.chartArea.top) / totalHeight;

      gradient.addColorStop(0, linePositiveColor);
      gradient.addColorStop(greenStop, linePositiveColor);
      gradient.addColorStop(redStop, lineNegativeColor);
      gradient.addColorStop(1, lineNegativeColor);

      return gradient;
    };

    const nowPlugin = enableNowLabel
      ? {
          id: "nowLabel",
          afterDraw: (chart: any) => {
            const {
              ctx,
              scales: { x, y },
            } = chart;
            const lastDataPoint =
              chart.getDatasetMeta(0).data[
                chart.getDatasetMeta(0).data.length - 1
              ];

            if (lastDataPoint) {
              ctx.save();
              ctx.fillStyle = axisColor;
              ctx.font = `${axisFontSize}px ${axisFontFamily}`;
              ctx.textAlign = "right";
              ctx.textBaseline = "top";
              ctx.fillText(nowLabelText, lastDataPoint.x, y.bottom + 13);
              ctx.restore();
            }
          },
        }
      : null;

    (chartInstance.current as any) = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: type,
            data: chartData,
            borderColor: function (context): Color {
              const chart = context.chart;
              const { ctx, chartArea } = chart;

              if (!chartArea) {
                return null as unknown as Color;
              }
              return createBorderGradient(ctx, chart);
            },
            borderWidth: lineWidth,
            backgroundColor: function (context): Color {
              const chart = context.chart;
              const { ctx, chartArea } = chart;

              if (!chartArea) {
                return null as unknown as Color;
              }
              return createGradient(ctx, chart);
            },
            tension: lineTension,
            fill: true,
            pointRadius: pointRadius,
            pointHoverRadius: pointHoverRadius,
            pointHoverBackgroundColor: function (context) {
              const value = chartData[context.dataIndex];
              return value >= 0 ? linePositiveColor : lineNegativeColor;
            },
            pointHoverBorderColor: pointBorderColor,
            pointHoverBorderWidth: pointBorderWidth,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: enableAnimation ? animationDuration : 0,
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            backgroundColor: tooltipBackground,
            titleColor: tooltipTitleColor,
            bodyColor: tooltipBodyColor,
            borderColor: tooltipBorderColor,
            borderWidth: tooltipBorderWidth,
            displayColors: tooltipDisplayColors,
            padding: tooltipPadding,
            cornerRadius: tooltipCornerRadius,
            callbacks: {
              label: function (context) {
                let label = context.dataset.label || "";
                if (label) {
                  label += ": $";
                }
                if (context.parsed.y !== null) {
                  label += new Intl.NumberFormat("en-US").format(
                    context.parsed.y
                  );
                }
                return label;
              },
            },
          },
        },
        scales: {
          x: {
            grid: {
              display: gridDisplay,
              color: gridColor,
            },
            ticks: {
              color: axisColor,
              font: {
                size: axisFontSize,
                family: axisFontFamily,
              },
              padding: axisPadding,
              maxRotation: 0,
              minRotation: 0,
              callback: function (value, index) {
                if (index === 0) return labels[0];
                return "";
              },
            },
            border: {
              display: false,
            },
          },
          y: {
            grid: {
              display: true,
              color: gridColor,
            },
            ticks: {
              color: axisColor,
              font: {
                size: axisFontSize,
                family: axisFontFamily,
              },
            },
            border: {
              display: false,
            },
          },
        },
        interaction: {
          intersect: false,
          mode: "index",
        },
      },
      plugins: nowPlugin ? [nowPlugin] : [],
    });

    return () => {
      if (chartInstance.current) {
        (chartInstance.current as any).destroy();
      }
    };
  }, [
    data,
    labels,
    type,
    linePositiveColor,
    lineNegativeColor,
    lineWidth,
    lineTension,
    fillPositiveColor,
    fillNegativeColor,
    fillOpacity,
    pointRadius,
    pointHoverRadius,
    pointBorderWidth,
    pointBorderColor,
    tooltipBackground,
    tooltipTitleColor,
    tooltipBodyColor,
    tooltipBorderColor,
    tooltipBorderWidth,
    tooltipDisplayColors,
    tooltipPadding,
    tooltipCornerRadius,
    gridDisplay,
    gridColor,
    axisColor,
    axisFontSize,
    axisFontFamily,
    axisPadding,
    enableNowLabel,
    nowLabelText,
    enableAnimation,
    animationDuration,
    chartData,
  ]);

  return (
    <div style={{ height, width: "100%" }}>
      <canvas ref={chartRef} style={{ maxHeight: "100%" }} />
    </div>
  );
};
