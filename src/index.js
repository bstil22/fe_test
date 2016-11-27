import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import rootReducer from './reducers/rootReducer'
import { createStore, compose } from 'redux'

const defaults = {data: {mean: 5, stdDeviation: 5}, chartData: {}};
const initialState = rootReducer(undefined, {type: 'INITIALIZE_APP', data: defaults});
const store = createStore(rootReducer, initialState, compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

const render = () => {
	const App = require('./components/App').default;
	const element = React.createElement(App, {
		dispatch: store.dispatch,
		state: store.getState()
	});

	ReactDOM.render(element, document.getElementById('root'));
};

store.subscribe(render);
store.dispatch({type: 'SET_ROUTE'}); // normally youd have a router here that triggers an update