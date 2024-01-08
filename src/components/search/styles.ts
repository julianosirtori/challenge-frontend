import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const FieldSearch = styled.div<{ hasResults: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  width: 100%;
  background-color: #f1f7fc;
  border: 1px solid #dee1e6;
  border-radius: 24px;

  ${({ hasResults }) =>
    hasResults &&
    css`
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: 1px solid transparent;
    `}

  &:hover {
    box-shadow: 0 4px 6px rgba(32, 33, 36, 0.28);
  }
`;

export const InputSearch = styled.input`
  outline: #dee1e6;
  background-color: transparent;
  line-height: 300%;
  font-size: 16px;
  font-weight: 400;
  cursor: default;
  color: #406a76;
  flex: 1;
  border: none;

  &:placeholder {
    color: #406a76;
    opacity: 0;
  }
`;

export const SearchButton = styled.button`
  background-color: #f1f7fc;
  padding: 4px;
`;

export const ResultSearch = styled.div`
  z-index: 3;
  background-color: #f1f7fc;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 49px;
  left: 0;
  width: 100%;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding-bottom: 8px;
  box-shadow: 0 4px 6px rgba(32, 33, 36, 0.28);
`;

export const ResultSearchItem = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: row;
  gap: 8px;

  img {
    width: 42px;
  }

  span {
    margin-left: 16px;
    font-weight: 500;
  }

  &:hover {
    cursor: pointer;
    background-color: #406a76;
    color: #f1f7fc;
  }
`;

export const ResultSearchButtons = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  padding: 8px;
`;

export const MoreButton = styled(Link)`
  padding: 4px 8px;
  color: #45d0c1;
  font-weight: 600;
`;
