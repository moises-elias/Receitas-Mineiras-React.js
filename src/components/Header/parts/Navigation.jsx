import { useState, useEffect, useRef } from "react";
import { X, ChevronDownIcon } from "lucide-react";
const Navigation = () => {
  const [categoryMenu, setCategoryMenu] = useState(false);
  const menuRef = useRef(null); // Referência para o menu de categorias

  const categoryMenuClick = () => {
    setCategoryMenu(prev => !prev); // Alterna o estado do menu
  };

  const handleClickOutside = event => {
    // Verifica se o clique foi fora do menu
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setCategoryMenu(false); // Fecha o menu
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside); // Adiciona o listener

    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Remove o listener na desmontagem
    };
  }, []);

  return (
    <nav className="navigation">
      <ul>
        <li>
          <a href="/" className="button">
            INICIO
          </a>
        </li>
        <li ref={menuRef}>
          {" "}
          {/* Referência para o li que contém o menu */}
          <a className="button" onClick={categoryMenuClick}>
            CATEGORIA
            {categoryMenu ? <X size={16} /> : <ChevronDownIcon size={16} />}
          </a>
          {categoryMenu && ( // Renderiza o menu apenas se categoryMenu for true
            <div className="categoryMenu categoryMenuOpen">
              <a className="categoryButton" href="">
                Refeição
              </a>
              <a className="categoryButton" href="">
                Café da manha
              </a>
              <a className="categoryButton" href="">
                Sobremesa
              </a>
              <a className="categoryButton" href="">
                Aperitivo
              </a>
              <a className="categoryButton" href="">
                Bebida
              </a>
            </div>
          )}
        </li>
        <li>
          <a href="../about.html" className="button">
            SOBRE
          </a>
        </li>
        <li>
          <a href="../contact.html" className="button">
            CONTATO
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
