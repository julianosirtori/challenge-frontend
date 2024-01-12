import React from "react";
import { Container, Content, ContentUser } from "./styles";
import Search from "../search";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <div>
          <Link to="/">
            <img
              src="https://s3-sa-east-1.amazonaws.com/files.arvoredelivros.com.br/arvore-library-assets/images/logos/logo-livros-horizontal-white.svg"
              alt="Arvore Livros"
              width="168"
              height="25"
            />
          </Link>
        </div>
        <Search />
        <ContentUser>
          <a href="#">login</a>
        </ContentUser>
      </Content>
    </Container>
  );
};

export default Header;
