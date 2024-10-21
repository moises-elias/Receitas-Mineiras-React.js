import { CircleArrowRightIcon, User2Icon, UserPlus } from "lucide-react";
import "./styles.userMenu.scss";

export function UserMenu() {
  const isUserLoggedIn = localStorage.getItem("loggedIn");

  function UserLoggedMenu() {
    return (
      <div className="userMenu">
        <a className="buttonRoyal" href="/account">
          Minha Conta <User2Icon />
        </a>
      </div>
    );
  }

  function UserNotLoggedMenu() {
    return (
      <div className="userMenu">
        <a className="buttonRoyal" href="/login">
          Entrar
          <CircleArrowRightIcon />
        </a>
        <a className="buttonRoyal" href="/register">
          Criar conta
          <UserPlus />
        </a>
      </div>
    );
  }

  if (isUserLoggedIn == "true") {
    return <UserLoggedMenu />;
  } else {
    if (!isUserLoggedIn) {
      localStorage.setItem("loggedIn", "false");
    }
    return <UserNotLoggedMenu />;
  }
}
