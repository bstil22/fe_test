import React from 'react';
import rd3 from 'rd3';

export default class Chart extends React.Component {
  render() {
    const BarChart = rd3.BarChart;
    const values = this.props.data;
    const formattedValues = values.map((val, i) => {
      return { x: i, y: parseFloat(val) };
    });
    const barChartData = [{ name: 'Values', values: formattedValues }];
    return (
      <BarChart
        data={barChartData}
        width={2000}
        height={300}
        title="Random Numbers"
        gridHorizontal={true}
        colors={() => {
          return 'darkorange';
        }}
      />
    );
  }
}
