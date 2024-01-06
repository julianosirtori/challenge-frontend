import styled, { css } from 'styled-components'
import {ReactComponent as SearchIcon} from '../../assets/search-icon.svg';

export const Container = styled.div`
    position: relative;
    width: 100%;
`

export const FieldSearch = styled.div<{hasResults: boolean}>`
    display: flex;
    justify-content: space-between ;
    align-items: center;
    padding: 0 16px;
    width: 100%;
    background-color: #F1F7FC;
    border: 1px solid #DEE1E6;
    border-radius: 24px;

    ${({hasResults}) => hasResults && css`
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom: none;
    `}

    &:hover{
        box-shadow: 0 4px 6px rgba(32,33,36,.28);
    }
`

export const InputSearch = styled.input`
    outline: #DEE1E6;
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
`

export const Icon = styled(SearchIcon)`
    
`

export const ResultSearch = styled.div`
    z-index: 3;
    background-color: #F1F7FC;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 49px;
    left: 0;
    width: 100%;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    padding-bottom: 8px;
    box-shadow: 0 4px 6px rgba(32,33,36,.28);

`

export const ResultSearchItem = styled.div`    
    padding: 8px;
    display: flex;
    flex-direction: row;
    gap: 8px;

    img{
        width: 42px;
    }

    span{
        margin-left: 16px;
        font-weight: 500;
    }


    &:hover{
        cursor: pointer;
        background-color: #406a76;
        color: #F1F7FC;
    }
`