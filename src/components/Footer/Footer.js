import { IconButton } from '@mui/material';

import EastIcon from '@mui/icons-material/East';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

import logo from './images/logo.png';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="wrapper">
        <div className="footer-wrap">
          <div className="footer__link">
            <a href="https://botler.ai/en/" to="/">
              Home
            </a>
            <a id="current-page" href="https://botler.ai/en/citizens" to="/">
              Botler for Citizens
            </a>
            <a href="https://botler.ai/en/login" to="/">
              Botler for Teams
            </a>
            <a href="https://botler.ai/en/request-access" to="/">
              Request Access
            </a>
            <a href="https://botler.ai/en/register-partner" to="/">
              Partner with Us
            </a>
            <a href="https://botler.ai/en/press" to="/">
              Press
            </a>
            <a href="https://botler.ai/en/contact-us" to="/">
              Contact Us
            </a>
          </div>
          <div className="newsletter">
            <img src={logo} alt="logo" />
            <p>
              Stay informed on Botler’s latest developments through our
              newsletter.
            </p>
            <form>
              <input placeholder="name@canada.ca"></input>
              <IconButton style={{ color: 'white' }}>
                <EastIcon />
              </IconButton>
            </form>
          </div>
        </div>
        <div className="footer--bottom">
          <div className="policy-wrapper">
            <a href="https://botler.ai/en/terms-and-conditions">
              Term & Conditions
            </a>
            <a href="https://botler.ai/en/privacy-policy">Privacy Policy</a>
            <a href="https://botler.ai/en/cookie-policy">Cookie Policy</a>
          </div>
          <div className="social">
            <a href="https://www.instagram.com/botlerai/">
              <InstagramIcon />
            </a>
            <a href="https://twitter.com/BotlerAI">
              <TwitterIcon />
            </a>
            <a href="https://www.linkedin.com/company/botlerai/">
              <LinkedInIcon />
            </a>
            <a href="https://www.facebook.com/ai.botler/">
              <FacebookIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
