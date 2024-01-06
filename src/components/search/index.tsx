import { 
    Container,
    FieldSearch, 
    Icon, 
    InputSearch,
    ResultSearch,
    ResultSearchItem
} from './styles'
import { useSearch } from './hooks'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Search = () => {
    const [isOpenAutoComplete, setIsOpenAutoComplete] = useState(false)
    const navigate = useNavigate()
    const {search, setSearch, result} = useSearch(isOpenAutoComplete)
    
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const navigateToSearchPage = () => {
        navigate(`/search?q=${search}`)
    }

    const handleOnKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const key = e.key;
        
        if(key === 'Enter'){
            navigateToSearchPage()
        }

        if(['Tab', 'Escape', 'Enter'].includes(key)){
            setIsOpenAutoComplete(false)
            return
        }
        if(result.length > 0){
            setIsOpenAutoComplete(true)
        }
    }

    const showResults = result.length > 0 && isOpenAutoComplete
    return (
        <Container>
            <FieldSearch hasResults={showResults}>
                <InputSearch  
                    value={search}
                    onBlur={() => setIsOpenAutoComplete(false)} 
                    onKeyDown={handleOnKeyUp} 
                    onChange={handleOnChange} 
                    type="text"  
                    placeholder='Pesquisar...' />
                <Icon onClick={() => navigateToSearchPage()} />
            </FieldSearch>
            {showResults && (
                <ResultSearch>
                    {result.map(book => (
                        <ResultSearchItem >
                            <span>{book.volumeInfo.title}</span>
                        </ResultSearchItem>
                    ))}
                </ResultSearch>
            )}
            
        </Container>
        
    )
}

export default Search