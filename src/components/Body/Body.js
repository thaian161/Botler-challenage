import Button from '@mui/material/Button';
import './Body.css';
import logo from './images/botler-logo.png';

export default function Nav() {
  return (
    <section className="body">
      <div className="header-citizens">
        <div className="citizens">Botler For Citizens</div>
        <div>
          <Button className="btn-citizen aaa" variant="contained">
            Request Access
          </Button>
          <Button className="btn-citizen bbb" variant="contained">
            Partner With Us
          </Button>
        </div>
      </div>
      <div className="canada-section">
        <p className="partnership">In partnership with the </p>
        <img
          className="canada"
          src="https://botler.ai/static/media/partner.4abda061.png"
          alt="Canada"
        />
      </div>
      <div className="brand-message">
        <div>
          <img
            src="https://botler.ai/static/media/citizen02.3e0c26d5.png"
            alt="Canada"
          />
          <p>
            Botler for Citizens is a free citizen-empowering first response
            system designed to confidentially support individuals who have faced
            harassment, violence, discrimination and misconduct through
            appropriate response and action guidance, putting power and control
            back into their hands.
          </p>
        </div>
        <div>
          <img
            src="https://botler.ai/static/media/citizen03.b805ed7d.png"
            alt="Canada"
          />
          <p>
            Botler’s secure web application confidentially asks users
            trauma-informed questions to capture comprehensive details of the
            misconduct they have experienced. Botler then provides the user with
            a personalized set of resources and action guidance on a per-case
            basis, including references to the law and referrals to legal
            services and information.
          </p>
        </div>
        <div>
          <img
            src="https://botler.ai/static/media/citizen02.3e0c26d5.png"
            alt="Canada"
          />
          <p>
            Armed with a meaningful understanding of the issue, users are
            empowered to seek justice and pursue their legal rights. All in
            strict confidence. Botler for Citizens is funded in part under the
            Department of Justice Canada’s $50 Million commitment to address
            sexual harassment in the workplace.
          </p>
        </div>
      </div>

      <footer>
        <div classname="wrapper">
          <div className="footer-wrap">
            <div className="footer__link">
              <a href="https://botler.ai/en/" className="nav-btn" to="/">
                Home
              </a>
              <a
                href="https://botler.ai/en/citizens"
                className="nav-btn"
                to="/"
              >
                Botler for Citizens
              </a>
              <a href="https://botler.ai/en/login" className="nav-btn" to="/">
                Botler for Teams
              </a>
              <a
                href="https://botler.ai/en/request-access"
                className="nav-btn"
                to="/"
              >
                Request Access
              </a>
              <a
                href="https://botler.ai/en/register-partner"
                className="nav-btn"
                to="/"
              >
                Partner with Us
              </a>
              <a href="https://botler.ai/en/press" className="nav-btn" to="/">
                Press
              </a>
              <a
                href="https://botler.ai/en/contact-us"
                className="nav-btn"
                to="/"
              >
                Contact Us
              </a>
            </div>
            <div className="newsletter">
              <img src={logo} alt="logo" />
              <p>
                Stay informed on Botler’s latest developments through our
                newsletter.
              </p>
              <input placeholder="name@canada.ca"></input>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
