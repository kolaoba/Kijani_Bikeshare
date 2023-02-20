function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo-box"></div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Company
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Contact us
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Carrers
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Privacy policy
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Facebook
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Instagram
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Twitter
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <p className="footer__copywrite">
          Built by{" "}
          <a href="https://www.kjbwebdev.com" className="footer__link">
            KJB Web Development
          </a>{" "}
          for{" "}
          <a href="https://www.kjbwebdev.com" className="footer__link">
            KJB Web Development
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
