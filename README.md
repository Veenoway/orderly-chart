# Orderly Charts

A React charting library for Orderly Network data visualization, built on top of Chart.js.

## Features

- PnL visualization
- Volume charts
- Customizable styling
- Responsive design
- Dark mode optimized
- Typescript support

## Installation

```bash
npm install @orderly/charts chart.js
# or
yarn add @orderly/charts chart.js
```

## Quick Start

```typescript
import { BarChart } from '@orderly/charts';

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
```

## Props

### Required Props

| Prop | Type | Description |
|------|------|-------------|
| data | `UserHistory[]` | Array of trading history data |
| type | `"PnL" \| "Volume" \| "Cumulative PnL"` | Type of chart to display |

### Optional Styling Props

#### Bar Customization
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| barPositiveColor | string | "rgb(14 203 129)" | Color for positive values |
| barNegativeColor | string | "rgb(234 57 67)" | Color for negative values |
| barBorderWidth | number | 1 | Width of bar borders |
| barBorderRadius | number | 4 | Border radius of bars |

#### Tooltip Customization
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| tooltipBackground | string | "rgba(30, 30, 30, 0.8)" | Background color of tooltip |
| tooltipTitleColor | string | "#FFFFFF" | Color of tooltip title |
| tooltipBodyColor | string | "#FFFFFF" | Color of tooltip body |
| tooltipBorderColor | string | "#836EF9" | Color of tooltip border |
| tooltipBorderWidth | number | 1 | Width of tooltip border |
| tooltipPadding | number | 10 | Padding inside tooltip |
| tooltipCornerRadius | number | 10 | Border radius of tooltip |

#### Grid & Axis Customization
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| gridDisplay | boolean | false | Show/hide grid lines |
| gridColor | string | "rgba(255, 255, 255, 0.03)" | Color of grid lines |
| axisColor | string | "#FFFFFF60" | Color of axis labels |
| axisFontSize | number | 10 | Font size of axis labels |
| axisFontFamily | string | "Arial" | Font family of axis labels |
| axisPadding | number | 5 | Padding around axis |

#### Animation & Other Options
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| height | string | 177px | Height of chart |
| enableAnimation | boolean | true | Enable/disable animations |
| animationDuration | number | 750 | Duration of animations in ms |
| enableNowLabel | boolean | true | Show/hide "now" label |
| nowLabelColor | string | "#FFFFFF60" | Color of "now" label |
| nowLabelFontSize | number | 10 | Font size of "now" label |

## Advanced Usage

```typescript
<BarChart 
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
```

## Types

```typescript
interface UserHistory {
  date: string;
  pnl: number;
  perp_volume: number;
}

type ChartType = "PnL" | "Volume" | "Cumulative PnL";
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © 2024 Novee
