import Filter from "@/components/filters";
import { books } from "@/components/shelves/constants";
import {
  Container,
  Content,
  ContentResults,
  ContentResultsCategory,
  ContentResultsCover,
  ContentResultsTitle,
  ContentResultsWrapper,
} from "./styles";

export const Search = () => {
  return (
    <Container>
      <Content>
        <Filter />
        <ContentResults>
          {books.map((shelf) => (
            <>
              {shelf.booksShelf.map((book, index) => (
                <ContentResultsWrapper key={index}>
                  <ContentResultsCover>
                    <img src={book.urlImage} alt={book.slug} />
                  </ContentResultsCover>
                  <ContentResultsTitle>
                    <label>{book.title} </label>
                  </ContentResultsTitle>
                  <ContentResultsCategory>
                    <span>{book.autor}</span>
                  </ContentResultsCategory>
                </ContentResultsWrapper>
              ))}
            </>
          ))}
        </ContentResults>
      </Content>
    </Container>
  );
};
