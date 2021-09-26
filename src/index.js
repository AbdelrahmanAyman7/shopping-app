import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux"
import { Store, presistor } from "./Components/redux/store";
import { PersistGate } from "redux-persist/integration/react";


ReactDOM.render(
  <React.StrictMode>
  <Provider store={Store}>
      <PersistGate persistor={presistor}>
        <App />
      </PersistGate>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);
