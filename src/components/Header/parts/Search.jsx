import { SearchIcon } from "lucide-react";

function Search() {
  return (
    <div className="search">
      <input type="text" placeholder="Pesquisar " />
      <button type="submit">
        <SearchIcon />
      </button>
    </div>
  );
}

export default Search;
