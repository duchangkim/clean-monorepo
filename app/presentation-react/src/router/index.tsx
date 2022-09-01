import { Routes as ReactRouterRoutes, Route, Navigate } from 'react-router-dom';
import { CounterList } from '../page/CounterList';
import { Start } from '../page/Start';

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
