import React, { useState } from 'react'

import { employess } from '../data/server.json'

function Search() {
  const [state, setState] = useState(employess)

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase()

    const result = employess.filter((d) => {
      return d.name.toLowerCase().includes(value)
    })

    setState([...result])
  }

  return (
    <div>
      {state.map((val) => {
        return <p className='employee-fetched-name'>{val.name}</p>
      })}
      <input
        className='text-input-search'
        type='text'
        placeholder='Pesquisar'
        onChange={(event) => {
          handleSearch(event)
        }}
      />
    </div>
  )
}

export default Search
