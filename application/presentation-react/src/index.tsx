import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'inversify-react';
import container from './IoCContainer/counter.ioc';
import { App } from './app';

const root = createRoot(document.getElementById('root') as Element);

root.render(
  <React.StrictMode>
    <Provider container={container}>
      <App />
    </Provider>
  </React.StrictMode>,
);
