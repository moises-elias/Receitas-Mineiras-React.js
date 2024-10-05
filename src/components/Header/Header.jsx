import Logo from "./parts/Logo";
import "./Header.scss";
import Navigation from "./parts/Navigation";
import Search from "./parts/Search";
import UserMenu from "./parts/UserMenu";

function Header() {
  return (
    <header>
      <Logo />
      <Search />
      <Navigation />
      <UserMenu />
    </header>
  );
}

export default Header;
