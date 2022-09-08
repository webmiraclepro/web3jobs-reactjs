import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Web3ReactProvider as Web3Provider } from '@web3-react/core';
import { UseWalletProvider as WalletProvider } from 'use-wallet';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';
import axios from 'axios';

import { walletConnect, chainId } from './utils/constants';
import routes, { renderRoutes } from './route';
import { store } from './redux/store';
import { customizedTheme } from './theme';
import { getLibrary } from './utils/helper';

function App() {
  const theme = createTheme(customizedTheme);

  useEffect(() => {
    axios.post(`${process.env.REACT_APP_API_URL}/history/increaseVisitors`);
  }, []);

  if (process.env.REACT_APP_ENV === 'prod') {
    console.log = () => {}
  }

  return (
    <WalletProvider connectors={walletConnect}>
      <Web3Provider getLibrary={getLibrary}>
        <ThemeProvider theme={theme}>
          {/*
          @ts-ignore */}
          <SnackbarProvider maxSnack={3}>
            <Provider store={store}>
              <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
            </Provider>
          </SnackbarProvider>
        </ThemeProvider>
      </Web3Provider>
    </WalletProvider>
  );
}

export default App;
