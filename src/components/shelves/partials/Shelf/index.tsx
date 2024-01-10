import ContentLoader from "react-content-loader";

import Carousel from "@/components/carousel";
import {
  Container,
  Content,
  ContentItem,
  ContentList,
  TitleCategory,
} from "./styles";
import { CategoryProps } from "./types";
import { settings } from "@/components/carousel/constants";
import { useQueryBooks } from "@/hooks/useQueryBooks";

export function Shelf({ title, query, isHighlight }: CategoryProps) {
  const { data, isLoading } = useQueryBooks({
    query,
  });

  if (isLoading) {
    return (
      <Container>
        <ContentLoader width="100%" height="300">
          <rect x="0" y="32" rx="4" ry="4" width="100%" height="300" />
        </ContentLoader>
      </Container>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <Container>
      <ContentList isHighlight={isHighlight}>
        <TitleCategory>{title}</TitleCategory>
        <Content>
          <Carousel settings={settings} spaceBetweenItems="16px">
            {data?.items.map((book) => (
              <ContentItem key={book.id}>
                <img
                  src={book.volumeInfo.imageLinks?.thumbnail}
                  alt={book.volumeInfo.title}
                />
              </ContentItem>
            ))}
          </Carousel>
        </Content>
      </ContentList>
    </Container>
  );
}
