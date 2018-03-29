import React from 'react';
import { BarChart } from 'rd3';

export default class Chart extends React.Component {
  values() {
    const data = this.props.data.map((val, i) => {
      return { x: i, y: parseFloat(val) };
    });
    return [{ name: 'Values', values: data }]
  }
  render() {
    return (
      <BarChart
        data={this.values()}
        width={2000}
        height={300}
        title="Random Numbers"
        gridHorizontal
        colors={() => {
          return 'darkorange';
        }}
      />
    );
  }
}
