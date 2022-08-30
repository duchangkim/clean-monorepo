import { Link } from 'react-router-dom';
import logo from '@reactExample/asset/image/favicon.png';

export function Start() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Clean monorepo 🏨</p>
        <Link to="/counter" className="App-link">
          Couter example
        </Link>
      </header>
    </div>
  );
}
