import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/rootStore'

ReactDOM.render(
	<Provider store={store}>
		<h1>Hello world!</h1>
	</Provider>,
	document.getElementById('root'),
);
