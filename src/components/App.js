import React, { Component } from 'react';
import gaussian from 'gaussian';
import Nouislider from 'react-nouislider';
import '../../node_modules/nouislider-algolia-fork/src/nouislider.css'; //doesnt work without it?!
import '../../node_modules/nouislider-algolia-fork/src/nouislider.tooltips.css'; //doesnt work without it?!
import '../../node_modules/nouislider-algolia-fork/src/nouislider.pips.css'; //doesnt work without it?!
import './../styles/App.css';
import Chart from './chart'

export default class App extends Component {
  render () {
  const {dispatch, state} = this.props;
  const {mean, stdDeviation} = state.data;
    return (
			<div>
				<div className="chart-container">
					<Chart data={chartData(mean, stdDeviation)}/>
				</div>
				<div className="container">
					<div className="half">
						<p>Std Dev</p>
						<Nouislider
							range={{min: 0.1, max: 10}}
							start={[stdDeviation || 0]}
							tooltips
							onChange={(e) => {dispatch({type: 'UPDATE_STD_DEV', data: parseFloat(e[0])});}}
						/>
					</div>
					<div className="half">
						<p>Mean</p>
						<Nouislider
							range={{min: 0, max: 10}}
							width="500"
							start={[mean || 0]}
							tooltips
							onChange={(e) => {dispatch({type: 'UPDATE_MEAN', data: parseFloat(e[0])})}}
						/>
					</div>
				</div>
			</div>
    )
  }
}

function chartData (mean, stdDev) {
  const distribution = gaussian(mean, (stdDev * stdDev));
  return [...Array(100)].map(() => {
    return generateNumbers(distribution);
  });
}

function generateNumbers (distribution) {
  return distribution.ppf(Math.random()).toFixed(2);
}
