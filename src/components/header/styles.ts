import styled from "styled-components";

export const Container = styled.div`
  background-color: #45d0c1;
  position: absolute;
  top: 0;
  padding: 16px;
  width: 100%;

  @media (min-width: 992px) {
    left: 0;
    right: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 992px) {
    margin: 0 auto;
    flex-direction: row;
    justify-content: space-between;
  }
  @media (min-width: 1440px) {
    max-width: 1433px;
  }
`;

export const ContentUser = styled.div`
  display: none;
  margin-left: 16px;
  @media (min-width: 992px) {
    display: block;
  }
`;
