/* eslint-disable @typescript-eslint/no-explicit-any */
import Chart from "chart.js/auto";
import { useEffect, useMemo, useRef } from "react";
import { ChartProps } from "../../types";

export const BarChart = ({
  data,
  type: typeBuffer,
  // Dimensions
  height = "177px",

  // Bar styles
  barPositiveColor = "rgb(14 203 129)",
  barNegativeColor = "rgb(234 57 67)",
  barBorderWidth = 1,
  barBorderRadius = 4,

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

  // Chart options
  enableAnimation = true,
  animationDuration = 750,
}: ChartProps) => {
  const type = typeBuffer.toLocaleLowerCase();
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const labels = useMemo(
    () => data?.map((entry) => new Date(entry.date).toLocaleDateString()) || [],
    [data]
  );

  const getBarColor = (value: number) => {
    return value >= 0 ? barPositiveColor : barNegativeColor;
  };

  useEffect(() => {
    if (chartInstance.current) {
      (chartInstance.current as any).destroy();
    }

    const ctx = (chartRef.current as any).getContext("2d");

    const nowPlugin = enableNowLabel
      ? {
          id: "nowLabel",
          afterDraw: (chart: any) => {
            const {
              ctx,
              scales: { y },
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
              ctx.fillText("NOW", lastDataPoint.x, y.bottom + 13);
              ctx.restore();
            }
          },
        }
      : null;

    const chartData =
      data?.map((entry) => {
        switch (type) {
          case "PnL":
            return entry.pnl;
          case "Cumulative PnL":
            return entry.pnl;
          case "Volume":
            return entry.perp_volume;
          default:
            return entry.pnl;
        }
      }) || [];

    (chartInstance.current as any) = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: type,
            data: chartData,
            backgroundColor: chartData.map((value) =>
              getBarColor(value as number)
            ),
            borderColor: chartData.map((value) => getBarColor(value as number)),
            borderWidth: barBorderWidth,
            borderRadius: barBorderRadius,
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
              display: gridDisplay,
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
            beginAtZero: true,
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
  }, [data, labels, type]);

  return (
    <div style={{ height: `${height}`, width: "100%" }}>
      <canvas ref={chartRef} style={{ maxHeight: "100%" }} />
    </div>
  );
};
