import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// Import Index CSS
import './index.css';

// Import App Component
import App from './App';

// Import React-Redux and Redux Store
import { Provider } from 'react-redux';
import store, { persistor } from './redux/root/store';

// Import React-Router-Dom
import { BrowserRouter as Router } from 'react-router-dom';

// Import Persist-Gate
import { PersistGate } from 'redux-persist/integration/react';

// Import Bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();