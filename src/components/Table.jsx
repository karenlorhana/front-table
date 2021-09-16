import React, { useEffect, useState } from 'react'

function Table() {
  const [dados, setDados] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/employess')
      .then((res) => res.json())
      .then((data) => setDados(data))
  }, [])

  return (
    <div>
      <span>
        <table className='table-header-color'>
          <tr>
            <th>FOTO </th>
            <th>NOME</th>
            <th>CARGO</th>
            <th>DATA DE ADMISSÃO</th>
            <th>TELEFONE</th>
          </tr>
        </table>
      </span>

      {dados.map((dado) => (
        <div key={dado.id}>
          <table>
            <tr>
              <td>foto{/* {dado.image} */}</td>
              <td>{dado.name}</td>

              <td>{dado.job}</td>

              <td>{dado.admission_date.substring(0, 10)}</td>

              <td>{dado.phone}</td>
            </tr>
          </table>
        </div>
      ))}
    </div>
  )
}

export default Table
