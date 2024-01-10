import { Container } from "./styles";
import { Shelf } from "./partials/Shelf";

const Shelves = () => {
  return (
    <Container>
      <Shelf title="Aventura" query='inauthor:"Júlio Verne"' />
      <Shelf title="Ficção" query='inauthor:"Isaac Asimov"' />
      <Shelf
        title="Destaque"
        query='inauthor:"Júlio Verne"'
        isHighlight={true}
      />
      <Shelf title="Ação" query='inauthor:"J.R.R. Tolkien"' />
    </Container>
  );
};

export default Shelves;
