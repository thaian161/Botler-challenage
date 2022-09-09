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

      <nav className="navbar">
        <a href="/" className="login">
          <img
            className="login-logo"
            src="https://cdn-icons-png.flaticon.com/512/1828/1828391.png"
            alt="Log in"
          />
        </a>
        <a href="/" className="nav-btn" to="/">
          Login
        </a>
        <a href="/" className="nav-btn" to="/about">
          <strong>EN</strong> | FR
        </a>
      </nav>
    </header>
  );
}
