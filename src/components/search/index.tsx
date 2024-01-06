import React from 'react'
import { Icon, InputSearch } from './styles'

const Search: React.FC = () => {

    return (
        <>
        <InputSearch type="text"  placeholder='Pesquisar...' />
        <Icon />
        </>
    )
}

export default Search