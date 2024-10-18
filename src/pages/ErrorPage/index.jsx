import { BugOffIcon } from "lucide-react";
import "./errorPage.scss";

export function ErrorPage() {
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
