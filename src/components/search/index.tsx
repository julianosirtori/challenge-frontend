import { useNavigate } from "react-router-dom";

import {
  Container,
  FieldSearch,
  Icon,
  InputSearch,
  MoreButton,
  ResultSearch,
  ResultSearchButtons,
  ResultSearchItem,
} from "./styles";
import { useState } from "react";

const Search = () => {
  const [isOpenAutoComplete, setIsOpenAutoComplete] = useState(false);
  const navigate = useNavigate();

  const navigateToSearchPage = (query: string = "") => {
    navigate(`/search?q=${query}`);
  };

  const result = [
    {
      id: "123",
      volumeInfo: {
        title: "teste",
      },
    },
    {
      id: "1321",
      volumeInfo: {
        title: "teste 123",
      },
    },
  ];

  const showResults = isOpenAutoComplete;
  return (
    <Container>
      <FieldSearch hasResults={showResults}>
        <InputSearch
          onBlur={() => setIsOpenAutoComplete(false)}
          onFocus={() => setIsOpenAutoComplete(true)}
          type="text"
          placeholder="Pesquisar..."
        />
        <Icon onClick={() => navigateToSearchPage()} />
      </FieldSearch>
      {showResults && (
        <ResultSearch>
          {result.map((book) => (
            <ResultSearchItem
              key={book.id}
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
