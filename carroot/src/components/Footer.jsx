import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__links">
        <div className="footer__left">
          <a href="https://about.google/">About</a>
          <a href="https://advertising.google.com/">Advertising</a>
          <a href="https://www.google.com/intl/en/business/">Business</a>
          <a href="https://www.google.com/search/howsearchworks/">
            How Search works
          </a>
        </div>
        <div className="footer__right">
          <a href="https://policies.google.com/privacy">Privacy</a>
          <a href="https://policies.google.com/terms">Terms</a>
          <a href="https://www.google.com/preferences">Settings</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
