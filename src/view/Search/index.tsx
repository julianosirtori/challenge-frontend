import React from "react";
import Header from "../../components/header";
import {
  Container,
  Content,
  ContentResults,
  ContentResultsCategory,
  ContentResultsCover,
  ContentResultsTitle,
  ContentResultsWrapper,
} from "./styles";
import Footer from "../../components/footer";
import {
  footerAllrightsReserved,
  helpLink,
  privacyAndPolicy,
  termsAndUsage,
} from "../../constants";
import { books } from "../../components/shelves/constants";

const Search: React.FC = () => {
  return (
    <>
      <Header />
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
      <Footer
        text={footerAllrightsReserved}
        privacyText={privacyAndPolicy}
        termsAndUsageText={termsAndUsage}
        helpText={helpLink}
      />
    </>
  );
};

export default Search;
