import { Routes as ReactRouterRoutes, Route, Navigate } from 'react-router-dom';

import { CounterList } from '@peterpan/react-example/feature/counter-list';
import { Start } from '@peterpan/react-example/feature/start';

function Routes() {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<Start />} />
      <Route path="/counter" element={<CounterList />} />
      <Route path="*" element={<Navigate to="/" />} />
    </ReactRouterRoutes>
  );
}

export default Routes;
