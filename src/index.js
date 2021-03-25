import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store, persistor} from './redux/store'; // se agrego el persistor y curly bracias para el local storage
import {PersistGate} from 'redux-persist/es/integration/react'; // local storage

ReactDOM.render(
  <Provider store= {store}>
    <BrowserRouter>
      <React.StrictMode>
        <PersistGate persistor={persistor}> 
          <App />
        </PersistGate>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);

