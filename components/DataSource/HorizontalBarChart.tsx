'use client'

import React from 'react';
import { Bar, BarChart, CartesianGrid, LabelList, ResponsiveContainer, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface DataPoint {
  age: string;
  percentage: number;
}

interface HorizontalBarChartProps {
  data: DataPoint[];
  title: string;
  valueKey: string;
  color: string;
  height?: number;
}

/**
 * HorizontalBarChart Component
 *
 * This component renders a horizontal bar chart using the BarChart component from Recharts.
 * It visualizes data points with categorical Y-axis and numeric X-axis.
 *
 * @param data - Array of objects containing 'age' and 'percentage' fields.
 * @param title - Title for the chart displayed in the CardHeader.
 * @param valueKey - Key in data objects to access numeric value (percentage).
 * @param color - Color code or name used for styling bars.
 * @param height - Optional height for ResponsiveContainer.
 */


const HorizontalBarChart: React.FC<HorizontalBarChartProps> = ({
  data,
  title,
  valueKey,
  color,
  height = 350
}) => {
  const chartConfig: ChartConfig = {
    [valueKey]: {
      label: valueKey,
      color: color,
    },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer height={height}>
          <ChartContainer config={chartConfig}>
            <BarChart
               data={data} // Data array for bar chart
               layout="vertical" // Display bars vertically
               margin={{
                 left: -20, // Adjust left margin for labels
               }}
            >
              {/* Remove horizontal grid lines */}
              <CartesianGrid horizontal={false} />
              {/* XAxis for numeric axis */}
              <XAxis 
                type="number" // Numeric axis type
                dataKey={valueKey} // Access data value using valueKey
                tickLine={false} 
                axisLine={false}
                padding={{ left: 1 }} 
                domain={[0, 30]} // Domain of axis values
                tickCount={4} // Number of ticks
              />
               {/* YAxis for categorical axis */}
              <YAxis
                dataKey="age"
                type="category"
                tickLine={false}
                tickMargin={10}
                axisLine={{ stroke: '#000' }}
                tick={false}
                width={25}
                padding={{top:10, bottom:10}}
                strokeWidth={2}
                reversed
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              {/* Bar component for rendering bars */}
              <Bar dataKey={valueKey} fill={`var(--color-${valueKey})`}>
                {/* LabelList for displaying labels */}
                <LabelList
                  dataKey="age" // Access 'age' field for labels
                  position="insideLeft" // Position inside bars
                  offset={8}
                  className="fill-[--color-label]"
                  fontSize={16}
                  fontWeight={600}
                />
              </Bar>
            </BarChart>
          </ChartContainer>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default HorizontalBarChart;