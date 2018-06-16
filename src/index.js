import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import App from './components/App';
import { StepList } from './components/StepList';
import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleware(logger));
render(
	<Provider store={store}>
	  <App />
	</Provider>,
	document.getElementById('root')
)

registerServiceWorker();
