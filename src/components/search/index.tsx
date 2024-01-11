import { useRef, useState } from "react";
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
  const [indexResultHighlight, setIndexResultHighlight] = useState<number>();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    search,
    setSearch,
    result = [],
  } = useSearch({
    disabled: isOpenAutoComplete,
  });

  const navigateToSearchPage = (query: string = search) => {
    setSearch(query);
    navigate(`/search?q=${query}`);
  };

  const closeResults = () => {
    // workaround to click on items working because when click on items the results div close firsts
    setTimeout(() => {
      setIsOpenAutoComplete(false);
    }, 100);
  };

  const incrementHighlight = () => {
    setIndexResultHighlight((highlight = 0) => {
      if (result.length <= highlight) {
        return highlight;
      }
      return highlight + 1;
    });
  };

  const decrementHighlight = () => {
    setIndexResultHighlight((highlight = 0) => {
      if (highlight === 0) {
        return highlight;
      }
      return highlight - 1;
    });
  };

  const handleEnterKey = () => {
    const highlight = Number(indexResultHighlight);
    if (highlight >= 0) {
      navigateToSearchPage(result[highlight].volumeInfo.title);
      inputRef.current?.blur();
      return;
    }
    navigateToSearchPage();
    inputRef.current?.blur();
  };

  const handleEscapeKey = () => {
    inputRef.current?.blur();
  };

  const handleKeyUpCapture = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case "Enter":
        handleEnterKey();
        break;
      case "Escape":
        handleEscapeKey();
        break;
      case "ArrowDown":
        incrementHighlight();
        break;
      case "ArrowUp":
        decrementHighlight();
        break;

      default:
        break;
    }
  };

  const showResults = result.length > 0 && isOpenAutoComplete;

  return (
    <Container>
      <FieldSearch hasResults={showResults}>
        <InputSearch
          ref={inputRef}
          onBlur={closeResults}
          onFocus={() => setIsOpenAutoComplete(true)}
          onChange={(e) => setSearch(e.target.value)}
          onKeyUpCapture={handleKeyUpCapture}
          value={search}
          type="text"
          data-testid="search-input"
          aria-label="autocomplete-input"
          placeholder="Pesquisar..."
        />
        <SearchButton onClick={() => navigateToSearchPage()}>
          <SearchIcon />
        </SearchButton>
      </FieldSearch>
      {showResults && (
        <ResultSearch data-testid="results-search">
          {result.map((book, index) => (
            <ResultSearchItem
              key={book.id}
              highlight={indexResultHighlight === index}
              data-testid={`results-search-item-${index}`}
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
