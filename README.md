Orderly Charts
A React charting library for Orderly Network data visualization, built on top of Chart.js.
Features

PnL visualization
Volume charts
Customizable styling
Responsive design
Dark mode optimized
Typescript support

Installation
bashCopynpm install @orderly/charts chart.js
# or
yarn add @orderly/charts chart.js
Quick Start
typescriptCopyimport { BarChart } from '@orderly/charts';

const MyComponent = () => {
  const data = [
    {
      date: '2024-01-01',
      pnl: 1000,
      perp_volume: 5000
    },
    {
      date: '2024-01-02',
      pnl: -500,
      perp_volume: 3000
    }
  ];

  return (
    <BarChart 
      data={data}
      type="PnL"
    />
  );
};
Props
Required Props
PropTypeDescriptiondataUserHistory[]Array of trading history datatype"PnL" | "Volume" | "Cumulative PnL"Type of chart to display
Optional Styling Props
Bar Customization
PropTypeDefaultDescriptionbarPositiveColorstring"rgb(14 203 129)"Color for positive valuesbarNegativeColorstring"rgb(234 57 67)"Color for negative valuesbarBorderWidthnumber1Width of bar bordersbarBorderRadiusnumber4Border radius of bars
Tooltip Customization
PropTypeDefaultDescriptiontooltipBackgroundstring"rgba(30, 30, 30, 0.8)"Background color of tooltiptooltipTitleColorstring"#FFFFFF"Color of tooltip titletooltipBodyColorstring"#FFFFFF"Color of tooltip bodytooltipBorderColorstring"#836EF9"Color of tooltip bordertooltipBorderWidthnumber1Width of tooltip bordertooltipPaddingnumber10Padding inside tooltiptooltipCornerRadiusnumber10Border radius of tooltip
Grid & Axis Customization
PropTypeDefaultDescriptiongridDisplaybooleanfalseShow/hide grid linesgridColorstring"rgba(255, 255, 255, 0.03)"Color of grid linesaxisColorstring"#FFFFFF60"Color of axis labelsaxisFontSizenumber10Font size of axis labelsaxisFontFamilystring"Arial"Font family of axis labelsaxisPaddingnumber5Padding around axis
Animation & Other Options
PropTypeDefaultDescriptionheightnumber177Height of chart in pixelsenableAnimationbooleantrueEnable/disable animationsanimationDurationnumber750Duration of animations in msenableNowLabelbooleantrueShow/hide "now" labelnowLabelColorstring"#FFFFFF60"Color of "now" labelnowLabelFontSizenumber10Font size of "now" label
Advanced Usage
typescriptCopy<BarChart 
  data={data}
  type="PnL"
  height={200}
  // Custom colors
  barPositiveColor="#00ff00"
  barNegativeColor="#ff0000"
  // Custom tooltip
  tooltipBackground="rgba(0, 0, 0, 0.9)"
  tooltipBorderColor="#ff0000"
  tooltipCornerRadius={15}
  // Grid options
  gridDisplay={true}
  gridColor="rgba(255, 255, 255, 0.1)"
  // Animation
  enableAnimation={true}
  animationDuration={500}
  // Font customization
  axisFontSize={12}
  nowLabelColor="#ff0000"
/>
Types
typescriptCopyinterface UserHistory {
  date: string;
  pnl: number;
  perp_volume: number;
}

type ChartType = "PnL" | "Volume" | "Cumulative PnL";
Contributing
Contributions are welcome! Please feel free to submit a Pull Request.
License
MIT © [Orderly Network]
