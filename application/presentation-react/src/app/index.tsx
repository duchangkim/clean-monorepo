import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../router';

import './index.scss';

export const App = function AppFunctionComponent() {
  return (
    <Router>
      <Routes />
    </Router>
  );
};
