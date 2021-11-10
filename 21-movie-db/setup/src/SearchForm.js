import React from 'react'
import { useGlobalContext } from './context'
const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = React.useRef('')

  function searchMovie() {
    setSearchTerm(searchValue.current.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
  }
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <h2>search movies</h2>
      <input type="text" className="form-input" ref={searchValue} onChange={searchMovie} />
    </form>
  )
}

export default SearchForm
