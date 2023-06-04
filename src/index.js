import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { persistor, store, theme } from './config';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import router from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={null} // 렌더링 지연 시간 (ms)
        persistor={persistor}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={router} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
