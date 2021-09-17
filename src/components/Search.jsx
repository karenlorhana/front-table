import React from 'react'
import { useState } from 'react'
import server from '../data/server.json'
import SearchIcon from '@material-ui/icons/Search'

function Search() {
  const [search, setSearch] = useState('')

  // const searchSpace = (event) => {
  //   let keyword = event.target.value
  //   this.setState({ search: keyword })
  // }

  // const filteredName = server
  //   .filter((data) => {
  //     if (search === '') {
  //       return data
  //     } else if (data.nome.toLoweCase().includes(search.toLowerCase())) {
  //       return data
  //     }
  //   })
  //   .map((data, key) => {
  //     return (
  //       <div className='user' key={key}>
  //         <span>{data.name}</span>
  //       </div>
  //     )
  //   })

  return (
    <div>
      <input
        className='text-input-search'
        type='search'
        placeholder='Pesquisar'
        endIcon={<SearchIcon />}
      />{' '}
    </div>
  )
}

export default Search
