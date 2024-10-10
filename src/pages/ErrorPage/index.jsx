import { BugOffIcon } from "lucide-react";
import "./errorPage.scss";

function Error404() {
  return (
    <main className="errorPage">
      <BugOffIcon />
      <h1>Página não encontrada!</h1>
      <p>
        <a href="/">clique aqui </a> para voltar a pagina principal
      </p>
    </main>
  );
}

export default Error404;
