import React from 'react'
import Icon from '@mui/material/Icon'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import TextField from '@material-ui/core/TextField'

function Search() {
  return (
    <div>
      <span className='t1-funcionarios'>Funcionários</span>
      <TextField className='text-input-search' label='Pesquisar' />
      <KeyboardArrowRightIcon />
    </div>
  )
}

export default Search
