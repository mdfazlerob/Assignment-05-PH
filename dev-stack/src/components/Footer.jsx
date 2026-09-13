import logoText from "../assets/logo-text.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <img src={logoText} alt="Dev Stack" className="logo-img" />
            </div>

            <p>
              Discover the right technologies and build your perfect
              development stack for modern projects.
            </p>

            <div className="social-links">
              <a href="https://github.com">GitHub</a>
              <a href="https://twitter.com">Twitter</a>
              <a href="https://linkedin.com">LinkedIn</a>
            </div>
          </div>

          <div className="footer-column">
            <h4>PRODUCT</h4>
            <a href="#">Features</a>
            <a href="#">Technologies</a>
            <a href="#">Projects</a>
          </div>

          <div className="footer-column">
            <h4>COMPANY</h4>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Careers</a>
          </div>

          <div className="footer-column">
            <h4>LEGAL</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Dev Stack. All rights reserved.</span>

          <div className="footer-bottom-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
