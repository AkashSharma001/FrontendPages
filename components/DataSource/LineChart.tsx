'use client'

import { ResponsiveLine } from '@nivo/line'

interface LineChartProps {
  data: Array<{
    id: string
    data: Array<{ x: string | number; y: number }>
  }>
  className?: string
}

/**
 * LineChart Component
 *
 * This component renders a line chart using the ResponsiveLine component from @nivo/line.
 * It visualizes data points over time or any linear x-axis scale.
 *
 * @param data - Array of objects containing 'id' and 'data' fields where 'data' is an array of { x, y } pairs.
 * @param className - Optional CSS class name to customize the styling of the chart container.
 */

const LineChart: React.FC<LineChartProps> = ({ data, className }) => (
  <div className={className}>
    {/* ResponsiveLine component from @nivo/line */}
    <ResponsiveLine
      data={data} // Data array containing series with unique 'id' and corresponding data points
      margin={{ top: 10, right: 10, bottom: 40, left: 40 }} // Margin configuration for chart spacing
      xScale={{ type: 'linear', min: 'auto' }}
      yScale={{ type: 'linear' }}
      curve="natural" // Curve interpolation type for lines
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 0, // Set tick size to 0 for a cleaner appearance
        tickPadding: 16, // Padding between ticks and axis
        tickValues: ['2019', '2020', '2021', '2022', '2023'] // Define specific tick values for bottom axis
      }}
      lineWidth={3.2}
      pointBorderColor={'#fff'}
      pointBorderWidth={1.2}
      axisLeft={{
        tickSize: 0,
        tickValues: 5,
        tickPadding: 16
      }}
      colors={['#577fed', '#5228cb']} // Color scheme for lines
      pointSize={7}
      useMesh={true}
      gridYValues={6}
      // Customize chart's visual theme
      theme={{
        tooltip: {
          chip: { borderRadius: '9999px' },
          container: {
            fontSize: '12px',
            textTransform: 'capitalize',
            borderRadius: '6px'
          }
        },
        // Customize grid lines
        grid: { line: { stroke: '#f3f4f6' } }
      }}
      role="application"
    />
  </div>
)

export default LineChart
