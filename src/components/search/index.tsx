import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Container,
  FieldSearch,
  InputSearch,
  MoreButton,
  ResultSearch,
  ResultSearchButtons,
  ResultSearchItem,
  SearchButton,
} from "./styles";
import { useSearch } from "./hooks";
import { SearchIcon } from "@/components/icons/SearchIcon";

const Search = () => {
  const [isOpenAutoComplete, setIsOpenAutoComplete] = useState(false);
  const navigate = useNavigate();
  const {
    search,
    setSearch,
    result = [],
  } = useSearch({
    disabled: isOpenAutoComplete,
  });

  const navigateToSearchPage = (query: string = "") => {
    navigate(`/search?q=${query}`);
  };

  const closeResults = () => {
    // workaround to click on items working because when click on items the results div close firsts
    setTimeout(() => {
      setIsOpenAutoComplete(false);
    }, 100);
  };

  const showResults = result.length > 0 && isOpenAutoComplete;

  return (
    <Container>
      <FieldSearch hasResults={showResults}>
        <InputSearch
          onBlur={closeResults}
          onFocus={() => setIsOpenAutoComplete(true)}
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          aria-label="autocomplete-input"
          placeholder="Pesquisar..."
        />
        <SearchButton onClick={() => navigateToSearchPage()}>
          <SearchIcon />
        </SearchButton>
      </FieldSearch>
      {showResults && (
        <ResultSearch data-testid="results-search">
          {result.map((book) => (
            <ResultSearchItem
              key={book.id}
              data-testid="results-search-item"
              onClick={() => navigateToSearchPage(book.volumeInfo.title)}
            >
              <span>{book.volumeInfo.title}</span>
            </ResultSearchItem>
          ))}
          <ResultSearchButtons>
            <MoreButton to={"/search"}>Ver mais...</MoreButton>
          </ResultSearchButtons>
        </ResultSearch>
      )}
    </Container>
  );
};

export default Search;
