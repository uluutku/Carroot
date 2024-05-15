import { useState } from "react";
import "./Search.css";

const Search = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      window.location.href = `https://www.google.com/search?q=${query}`;
    }
  };

  return (
    <div className="search">
      <div className="search__logo">🥕Carroot</div>
      <form className="search__form" onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search__input"
        />
        <div className="search__buttons">
          <button type="submit">Carroot Search</button>
          <button
            type="button"
            onClick={() =>
              (window.location.href = "https://www.google.com/doodles")
            }
          >
            I'm Feeling Lucky
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
