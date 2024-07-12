'use client'

import React from 'react';
import { CartesianGrid, DotProps, Line, LineChart, ResponsiveContainer, Tooltip, TooltipProps, XAxis, YAxis } from "recharts";
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';

// Define types for our data
type DataPoint = {
  year: string;
  value: number;
};

type LineData = {
  id: string;
  data: DataPoint[];
  color: string;
};

type LineChartProps = {
  data: LineData[];
  className?: string;
};

// Customized dot component for rendering dots on the line
const CustomizedDot: React.FC<DotProps> = (props) => {
  const { cx, cy, fill, r } = props;
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={fill} />
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill={fill}
        stroke="#fff"
        strokeWidth={1.2}
      />
    </g>
  );
};

// Custom tooltip component for displaying tooltip content
const CustomTooltip: React.FC<TooltipProps<ValueType, NameType>> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const hoveredPayload = payload[0];
    return (
      <div className="custom-tooltip" style={{ backgroundColor: 'white', padding: '5px', border: '1px solid #ccc' }}>
        <p className="label">{`Year: ${label}`}</p>
        <p >{`${hoveredPayload.dataKey}: ${hoveredPayload.value}`}</p>
      </div>
    );
  }
  return null;
};

/**
 * LineChartComponent
 * 
 * This component renders a line chart using the LineChart component from Recharts.
 * It visualizes data points over time or any linear x-axis scale.
 * 
 * @param data - Array of objects containing 'year' and 'value' fields where 'data' is an array of { x, y } pairs.
 * @param className - Optional CSS class name to customize the styling of the chart container.
 */
const LineChartComponent: React.FC<LineChartProps> = ({ data, className }) => {
  const allYears = [2019, 2020, 2021, 2022, 2023]
  const allTicks = allYears.flatMap(year => [year, year + 0.5]).slice(0, -1);

  return (
    <div className={className}>
      {/* ResponsiveContainer for responsive chart size */}
      <ResponsiveContainer width="100%" >
         {/* LineChart component from Recharts */}
        <LineChart margin={{ right: 15 }} >
          {/* CartesianGrid for grid lines */}
          <CartesianGrid vertical={true} syncWithTicks={true} />
          {/* XAxis for horizontal axis */}
          <XAxis
            dataKey="year" // Access 'year' field in data
            type="number" // Numeric axis type
            domain={[2019, 2023]} // Domain of axis values
            ticks={allTicks} // Custom ticks with half-year intervals
            tickFormatter={(value) => Number.isInteger(value) ? value.toString() : ''} // Format ticks
            interval={0} // Interval between ticks
            tickLine={false}
            axisLine={false}
            minTickGap={50} // Minimum gap between ticks
            tickMargin={10}
            tick={{ stroke: 'rgb(51, 51, 51)', fontSize: '11px', fontWeight: 100 }} // Tick styling
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={10}
            width={28}
            tick={{ stroke: 'rgb(51, 51, 51)', fontSize: '11px', fontWeight: 100 }}
          />

          {/* Tooltip component with custom content */}
          <Tooltip content={<CustomTooltip />} />
          {/* Render each line based on provided data */}
          {data.map((lineData, index) => (
            <Line
              key={lineData.id}
              dataKey="value" // Access 'value' field in data
              data={lineData.data} // Data points for the line
              type="monotone" // Monotone interpolation for smooth curve
              stroke={lineData.color} // Line color
              strokeWidth={3.2}
              dot={<CustomizedDot r={3.5} fill={lineData.color} />} // Custom dot for each data point
              activeDot={<CustomizedDot r={3.5} fill={lineData.color} />} // Active dot on hover
              isAnimationActive={true} // Enable animation
              name={lineData.id}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;