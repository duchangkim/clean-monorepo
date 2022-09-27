import { Routes as ReactRouterRoutes, Route, Navigate } from 'react-router-dom';

import { CounterList } from '@peterpan/react-example/feature/counter-list';
import { Start } from '@peterpan/react-example/feature/start';
import { Login } from '@peterpan/react-example/feature/login';

function Routes() {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<Start />} />
      <Route path="/counter" element={<CounterList />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/" />} />
    </ReactRouterRoutes>
  );
}

export default Routes;
