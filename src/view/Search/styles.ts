import styled from "styled-components";

export const Container = styled.div`
  padding: 0 16px;
  width: 100%;
  margin: 46px auto 140px auto;
  max-width: 1216px;

  @media (max-width: 480px) {
    padding: 0 8px;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 8px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
