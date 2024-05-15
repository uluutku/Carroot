import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <a href="https://about.google/">About</a>
        <a href="https://store.google.com/">Store</a>
      </div>
      <div className="header__right">
        <a href="https://mail.google.com/">Gmail</a>
        <a href="https://images.google.com/">Images</a>
        <a href="https://www.google.com/intl/en/options/">Apps</a>
        <a href="https://accounts.google.com/">Sign in</a>
      </div>
    </header>
  );
};

export default Header;
