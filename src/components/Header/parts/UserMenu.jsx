import { CircleArrowRightIcon, User2Icon, UserPlus } from "lucide-react";

function UserMenu() {
  const token = localStorage.getItem("token");
  if (token == true) {
    return (
      <div className="userMenu">
        <a href="/account">
          Minha Conta <User2Icon />
        </a>
      </div>
    );
  } else {
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
}
export default UserMenu;
