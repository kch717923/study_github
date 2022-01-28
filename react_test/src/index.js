import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer, { rootSaga } from './modules/index.js';
import { Provider } from 'react-redux';
//import loggerMiddleware from './lib/loggerMiddleware';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga';

const saga = createSagaMiddleware();
const store = createStore(rootReducer,applyMiddleware(logger,ReduxThunk,saga));
saga.run(rootSaga)
ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App/>
		</Provider>
	</BrowserRouter>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
