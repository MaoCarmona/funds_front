import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
      </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);