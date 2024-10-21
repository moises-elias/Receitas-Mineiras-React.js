import { Logo, Search, UserMenu, Navigation } from "./parts";
import "./styles.header.scss";

function Header() {
  return (
    <header>
      <Logo />
      <Search />
      <UserMenu />
      <Navigation />
    </header>
  );
}

export default Header;
