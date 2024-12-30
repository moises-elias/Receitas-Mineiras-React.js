import { ConstructionIcon } from "lucide-react";
import "./styles.underConstructionPage.scss";

export function UnderConstructionPage() {
  return (
    <main className="underConstructionPage">
      <ConstructionIcon />
      <h1>Página em construção!</h1>
      <p>
        Estamos trabalhando para melhorar nossa plataforma. Em breve está pagina estará disponível!
      </p>
      <p>
        <a href="/">Clique aqui </a> para voltar a pagina principal.
      </p>
    </main>
  );
}
