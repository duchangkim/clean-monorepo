import { Link } from 'react-router-dom';
import peterpanBrandSymbol from '@peterpan/shared/asset/image/peterpan-brand-symbol.png';

import './Start.scss';

export const Start = function StartPageFunctionComponent() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={peterpanBrandSymbol} className="App-logo" alt="peterpan logo" />
        <p>
          Clean monorepo{' '}
          <span role="img" aria-label="Hotel emoji">
            🏨
          </span>
        </p>
        <Link to="/counter" className="App-link">
          Couter example
        </Link>
        <Link to="/login" className="App-link">
          Login
        </Link>
      </header>
    </div>
  );
};
