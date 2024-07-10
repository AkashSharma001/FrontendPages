'use client'

import { ResponsiveBar } from '@nivo/bar'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

interface HorizontalBarChartProps {
  data: Array<{ age: string; percentage: number }>
  className?: string
}

/**
 * HorizontalBarChart Component
 *
 * This component renders a horizontal bar chart using the ResponsiveBar component from @nivo/bar.
 * It displays demographic percentages based on the provided data array.
 *
 * @param data - Array of objects containing 'name' and 'percentage' fields to render bars for each demographic category.
 * @param className - Optional CSS class name to customize the styling of the chart container.
 */

const HorizontalBarChart: React.FC<HorizontalBarChartProps> = ({
  data,
  className
}) => (
  <Card>
    {/* Card header with title */}
    <CardHeader>
      <CardTitle>Demographics %</CardTitle>
    </CardHeader>
    <CardContent>
      <div className={className}>
        {/* ResponsiveBar component from @nivo/bar */}
        <ResponsiveBar
          data={data}
          keys={['percentage']}
          indexBy="age"
          layout="horizontal"
          padding={0.2}
          colors={['#bfa9f9']}
          enableGridX // Enable grid lines on the X-axis
          margin={{ top: 0, right: 7, bottom: 10, left: 5 }} // Adjust margins for better layout
          axisLeft={null} // Hide the Y-axis
          enableGridY={false} // Disable grid lines on the Y-axis
          axisBottom={{
            tickSize: 0, // Set tick size to 0 for a cleaner appearance
            tickPadding: 0, // Remove tick padding
            tickRotation: 0, // Rotate ticks to 0 degrees
            tickValues: [0, 10, 20, 30] // Define specific tick values
          }}
          layers={[
            'grid',
            'axes',
            'bars',
            'markers',
            'legends',
            'annotations',
            (
              { bars } // Custom layer to render data labels
            ) => (
              <g>
                {bars.map(({ x, y, data: { indexValue } }) => (
                  <text
                    key={`${x}.${y}`}
                    x={10}
                    y={y + 28}
                    textAnchor="start"
                    className="m-12 font-semibold"
                  >
                    {indexValue}
                  </text>
                ))}
              </g>
            )
          ]}
          gridXValues={6}
          // Customize the chart's visual theme
          theme={{
            // Customize grid lines
            grid: { line: { stroke: '#f3f4f6' } }
          }}
          markers={[
            {
              axis: 'x',
              value: 0,
              lineStyle: { stroke: '#000', strokeWidth: 2 }, // Customize line style
              legendOrientation: 'vertical'
            }
          ]}
          maxValue={30} // Set the maximum value for the chart
          label={({ indexValue }) => `${indexValue}`} // Customize labels for each bar
          tooltip={(
            d // Custom tooltip rendering
          ) => (
            <div className="flex items-center justify-center rounded-sm bg-white p-2">
              <div className={`h-4 w-6 rounded-sm bg-[#bfa9f9]`} />
              <span className="flex">
                <span className="ml-2">
                  {d.indexValue} : {d.value} %
                </span>
              </span>
            </div>
          )}
          enableLabel={false}
          role="application"
          ariaLabel="Demographics chart"
        />
      </div>
    </CardContent>
  </Card>
)

export default HorizontalBarChart
