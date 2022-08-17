import React from 'react';
import { Routes as ReactRouterRoutes, Route, Navigate } from 'react-router-dom';
import { Start } from '../page/Start';
import { CounterList } from '../page/CounterList';

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
