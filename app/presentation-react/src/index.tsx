import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'inversify-react';
import App from '@/page/App';
import container from '@/di/counter.ioc';

const root = createRoot(document.getElementById('root') as Element);

root.render(
  <React.StrictMode>
    <Provider container={container}>
      <App />
    </Provider>
  </React.StrictMode>,
);