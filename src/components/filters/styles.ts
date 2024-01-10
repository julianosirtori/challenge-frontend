import styled, { css } from "styled-components";

export const ContainerDesktop = styled.div`
  background-color: #fff;
`;

export const ContainerMobile = styled.div<{ isOpen: boolean }>`
  display: none;
  ${({ isOpen }) =>
    isOpen &&
    css`
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1;
      background-color: #fff;
      padding: 32px;
      width: 100vw;
      height: 100vh;
    `}
`;
