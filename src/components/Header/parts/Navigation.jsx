import { useState, useEffect, useRef } from "react";
import { X, ChevronDownIcon } from "lucide-react";

function Navigation() {
  const [categoryMenuState, setCategoryMenuState] = useState(false);
  const categoryMenuDropdownRef = useRef(null);

  function categoryMenuClick() {
    setCategoryMenuState(!categoryMenuState);
  }

  function CategoryMenDropdown() {
    function handleClickOutside(event) {
      if (

        categoryMenuDropdownRef.current &&
        !categoryMenuDropdownRef.current.contains(event.target)
      ) {
        setCategoryMenuState(false);
      }
    }

    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
    if (categoryMenuState) {
      return (
        <div className="categoryMenu categoryMenuOpen">
          <a className="categoryButton" href="">
            Refeição
          </a>
          <a className="categoryButton" href="">
            Café da manhã
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
      );
    }
  }

  return (
    <nav className="navigation">
      <ul>
        <li>
          <a href="/" className="button">
            INICIO
          </a>
        </li>
        <li ref={categoryMenuDropdownRef}>
          <a className="button" onClick={categoryMenuClick}>
            CATEGORIA
            {categoryMenuState ? <X size={16} /> : <ChevronDownIcon size={16} />}
          </a>
          <CategoryMenDropdown />
        </li>
        <li>
          <a href="/about" className="button">
            SOBRE
          </a>
        </li>
        <li>
          <a href="/" className="button">
            SURPREENDA-ME
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
