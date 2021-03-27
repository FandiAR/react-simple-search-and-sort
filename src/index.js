import React from 'react';
import ReactDOM from 'react-dom';
import './styles/_app.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Router } from 'react-router-dom';
import history from './routes/browserHistory';
import { Provider } from 'react-redux';
import configureStore from './redux-modules/Create';
import apiHost from './libs/apiHost';

let initialState = 'Fandi';
initialState = window.DATA;
const client = new apiHost();
const store = configureStore(client, initialState);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Router history={history}>
        <App />
      </Router>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
