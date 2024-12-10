export interface UserHistory {
  date: string;
  pnl: number;
  perp_volume: number;
}

export interface ChartProps {
  data: UserHistory[];
  type: "PnL" | "Volume" | "Cumulative PnL";
  // Dimensions
  height?: string;

  // Bar styles
  barPositiveColor?: string;
  barNegativeColor?: string;
  barBorderWidth?: number;
  barBorderRadius?: number;

  // Tooltip styles
  tooltipBackground?: string;
  tooltipTitleColor?: string;
  tooltipBodyColor?: string;
  tooltipBorderColor?: string;
  tooltipBorderWidth?: number;
  tooltipDisplayColors?: boolean;
  tooltipPadding?: number;
  tooltipCornerRadius?: number;

  // Grid styles
  gridDisplay?: boolean;
  gridColor?: string;

  // Axis styles
  axisColor?: string;
  axisFontSize?: number;
  axisFontFamily?: string;
  axisPadding?: number;

  // Text styles
  labelFontSize?: number;
  labelFontFamily?: string;

  // Plugin options
  enableNowLabel?: boolean;
  nowLabelColor?: string;
  nowLabelFontSize?: number;

  // Chart options
  enableAnimation?: boolean;
  animationDuration?: number;
}

export type ChartType = "PnL" | "Volume" | "Cumulative PnL";
