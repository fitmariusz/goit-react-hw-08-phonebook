// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';

// import { Provider } from 'react-redux';
// import { store } from './redux/store'


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//       </Provider>
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import 'modern-normalize';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);