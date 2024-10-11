import Logo from "./parts/Logo";
import Search from "./parts/Search";
import Navigation from "./parts/Navigation";
import UserMenu from "./parts/UserMenu";
import "./styles.header.scss";

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
