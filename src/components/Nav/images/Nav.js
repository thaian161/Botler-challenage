import './Nav.css';
import logo from './images/botler-logo.png';

export default function Nav() {
  return (
    <header className="header">
      <div className="logoContent">
        <a href="/" className="logo">
          <img src={logo} alt="Botler AI logo" />
        </a>
      </div>
      <div className="my-photo-on-nav">
        <a class="nav-item nav-link" href="/urls">
          Login
        </a>
        <a class="nav-item nav-link" href="/urls/new">
          EN | FR
        </a>
      </div>
    </header>
  );
}
