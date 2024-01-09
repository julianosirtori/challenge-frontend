import styled from "styled-components";

export const Container = styled.div`
  padding: 140px 16px;
  width: 100%;

  @media (max-width: 480px) {
    padding: 140px 8px;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 8px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const ContentResults = styled.div`
  grid-template-columns: repeat(auto-fill, 124px);
  justify-content: center;
  gap: 48px;
  display: grid;
  margin: 0;
  width: 100%;

  @media (max-width: 480px) {
    gap: 16px;
  }
`;

export const ContentResultsWrapper = styled.div`
  margin: 10px 0;
`;

export const ContentResultsCover = styled.div`
  background-image: url("./src/assets/image-fallback.png");
  background-size: cover;
  background-position: center;
  width: 124px;
  height: 185px;

  img {
    width: 124px;
    height: 185px;
  }
`;

export const ContentResultsTitle = styled.div`
  label {
    font-size: 14px;
    color: #86878b;
  }
`;

export const ContentResultsCategory = styled.div`
  span {
    font-size: 14px;
    color: #9eaeb7;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 30px;
  }
`;
