import React from 'react';
import { StoreProvider } from './stores';
import IntroPage from './IntroPage';

export default props => (
  <StoreProvider {...props}>
    <IntroPage />
  </StoreProvider>
);
