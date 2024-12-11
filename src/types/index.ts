export interface UserHistory {
  date: string;
  [key: string]: number | string;
}

export interface ChartProps {
  data: UserHistory[];
  type: string;
  // Dimensions
  height: string;

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

export interface LineChartProps {
  data: UserHistory[];
  type: string;
  // Dimensions
  height: string;

  // Line styles
  linePositiveColor?: string;
  lineNegativeColor?: string;
  lineWidth?: number;
  lineTension?: number;

  // Fill styles
  fillPositiveColor?: string;
  fillNegativeColor?: string;
  fillOpacity?: number;

  // Point styles
  pointRadius?: number;
  pointHoverRadius?: number;
  pointBorderWidth?: number;
  pointBorderColor?: string;

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

  // Plugin options
  enableNowLabel?: boolean;
  nowLabelText?: string;

  // Chart options
  enableAnimation?: boolean;
  animationDuration?: number;
}
