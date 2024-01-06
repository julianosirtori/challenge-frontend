import {
  Container,
  Content,
  ContentResults,
  ContentResultsCategory,
  ContentResultsCover,
  ContentResultsTitle,
  ContentResultsWrapper,
} from "./styles";
import { books } from "../../components/shelves/constants";

export const Search = () => {
  return (
    <Container>
      <Content>
        <ContentResults>
          {books.map((shelf) => (
            <>
              {shelf.booksShelf.map((book) => (
                <ContentResultsWrapper key={book.slug}>
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
