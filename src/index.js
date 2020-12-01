import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ProviderReactRedux } from 'react-redux'
import { BrowserRouter as Router } from "react-router-dom";
import ServiceJoke from './serviceJoke/serviceJoke'
import { ProviderServiceJoke } from './components/context/contextServiceJoke'
import App from './components/App'
import store from './store'

const serviceJoke = new ServiceJoke()

ReactDOM.render(
  <ProviderReactRedux store={store}>
    <ProviderServiceJoke value={serviceJoke}>
      <Router>
        <App />
      </Router>
    </ProviderServiceJoke>
  </ProviderReactRedux>,
  document.getElementById('root')
);
