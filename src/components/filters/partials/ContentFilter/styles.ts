import styled from "styled-components";

export const Content = styled.div`
  background-color: #fff;
  width: 260px;
  display: block;
`;
export const ContentTitle = styled.p`
  color: #9eaeb7;
  font-size: 16px;
  font-weight: 700;
`;

export const WrapperFilter = styled.div`
  width: 100%;
`;

export const Button = styled.button`
  height: 40px;
  border-radius: 10px;
  cursor: pointer;
  padding: 4px 16px;
  text-transform: uppercase;
  background-color: #adb7bf;
  margin: 16px 0;
`;
export const FilterTitle = styled.p`
  color: #053b4b;
  font-size: 16px;
  font-weight: 700;
`;
export const FilterContent = styled.div`
  & > ul {
    list-style-type: none;
    padding: 0;
    margin-bottom: 8px;
  }
  & > ul > li {
    margin-bottom: 3px;
    display: flex;
    flex-direction: row;
    justify-items: center;

    input {
      margin-right: 4px;
    }

    span {
      color: #053b4b;
    }
  }
`;
