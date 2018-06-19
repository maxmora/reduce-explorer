import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './reducers';
import App from './App';

const store = createStore(rootReducer, applyMiddleware(logger));
render(
	<Provider store={store}>
	  <App />
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
