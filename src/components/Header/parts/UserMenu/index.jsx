import { CircleArrowRightIcon, User2Icon, UserPlus } from "lucide-react";
import "./styles.userMenu.scss";
function UserMenu() {
  const isUserLoggedIn = localStorage.getItem("loggedIn");

  function UserLoggedMenu() {
    return (
      <div className="userMenu">
        <a href="/account">
          Minha Conta <User2Icon />
        </a>
      </div>
    );
  }

  function UserNotLoggedMenu() {
    return (
      <div className="userMenu">
        <a href="/login">
          Entrar
          <CircleArrowRightIcon />
        </a>
        <a href="/register">
          Criar conta
          <UserPlus />
        </a>
      </div>
    );
  }
  return isUserLoggedIn ? <UserLoggedMenu /> : <UserNotLoggedMenu />;
}
export default UserMenu;
