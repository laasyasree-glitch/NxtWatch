import {BsSearch} from 'react-icons/bs'
import {SearchContainer, SearchInput, SearchButton} from './styledComponents'

const SearchFilter = props => {
  const {enterSearchInput, searchInput, changeSearchInput} = props

  const onEnterSearchInput = event => {
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const onChangeSearchInput = event => {
    changeSearchInput(event.target.value)
  }

  const onClickSearch = () => {
    enterSearchInput()
  }

  return (
    <SearchContainer>
      <SearchInput
        value={searchInput}
        type="search"
        className="search-input"
        placeholder="Search"
        onChange={onChangeSearchInput}
        onKeyDown={onEnterSearchInput}
      />
      <SearchButton
        type="button"
        onClick={onClickSearch}
        data-testid="searchButton"
      >
        <BsSearch className="search-icon" />
      </SearchButton>
    </SearchContainer>
  )
}

export default SearchFilter
