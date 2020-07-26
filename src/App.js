import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'store';
import styled from 'styled-components';

import Routes from './routes';

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
    Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    'Noto Color Emoji';
  line-height: 1.5;
`;

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <AppContainer>
        <Routes />
      </AppContainer>
    </Provider>
  );
}

export default App;
