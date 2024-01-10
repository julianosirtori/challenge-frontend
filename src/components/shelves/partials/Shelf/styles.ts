import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  margin: auto;
`;

export const ContentList = styled.div<{ isHighlight?: boolean }>`
  width: 100%;
  padding: 16px;
  ${({ isHighlight }) =>
    isHighlight &&
    css`
      background-color: #daf6f3;
    `}
`;

export const ContentItem = styled.div`
  display: flex;
  width: calc(100% - 80px);
  max-width: 768px;

  > img {
    width: 198px;
    height: 296px;
    max-width: 768px;
  }
`;

export const TitleCategory = styled.div`
  color: #053b4b;
  font-size: 16px;
  font-weight: 700;
  max-width: 400px;
  padding: 30px 0 0;

  @media (min-width: 1408px) {
    margin: 0 auto;
    padding: 30px 0 0;
    max-width: 1296px;
  }
`;
