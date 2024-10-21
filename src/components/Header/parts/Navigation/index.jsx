import { useState, useEffect, useRef } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import "./styles.navigation.scss";

export function Navigation() {
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

    return (
      <div
        className={`categoryMenu ${
          !categoryMenuState ? "categoryMenuClosed" : "categoryMenuOpened"
        }`}
      >
        <a className=" categoryButton button" href="/category/refeicao">
          Refeição
        </a>
        <a className="button categoryButton" href="/category/cafe-da-manha">
          Café da manhã
        </a>
        <a className="button categoryButton" href="/category/sobremesa">
          Sobremesa
        </a>
        <a className="button categoryButton" href="/category/aperitivo">
          Aperitivo
        </a>
        <a className="button categoryButton" href="/category/bebida">
          Bebida
        </a>
      </div>
    );
  }

  return (
    <nav className="navigation">
      <ul>
        <li>
          <a href="/" className="button">
            INICIO
          </a>
        </li>
        <li className="liCategory" ref={categoryMenuDropdownRef}>
          <a className={`button ${categoryMenuState ? "active" : ""}`} onClick={categoryMenuClick}>
            CATEGORIA
            {categoryMenuState ? (
              <ChevronUpIcon size={16} className="iconCategory" />
            ) : (
              <ChevronDownIcon size={16} />
            )}
          </a>
          <CategoryMenDropdown />
        </li>
        <li>
          <a href="/about" className="button">
            SOBRE
          </a>
        </li>
        <li>
          <a href="/recipe/0" className="button">
            SURPREENDA-ME
          </a>
        </li>
      </ul>
    </nav>
  );
}
