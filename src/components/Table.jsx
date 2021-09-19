import React, { useEffect, useState } from 'react'

function Table() {
  const [dados, setDados] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/employess')
      .then((res) => res.json())
      .then((data) => setDados(data))
  }, [])

  return (
    <div className='tb-container'>
      <h4 className='t1-funcionarios'>Funcionários</h4>
      <span>
        <table className='table-header-color'>
          <thead>
            <tr>
              <th>FOTO </th>
              <th>NOME</th>
              <th>CARGO</th>
              <th>DATA DE ADMISSÃO</th>
              <th>TELEFONE</th>
            </tr>
          </thead>
        </table>
      </span>

      {dados.map((dado) => (
        <div key={dado.id}>
          <table>
            <tbody>
              <tr>
                <td>
                  <img
                    className='employee-icon-profile'
                    src={dado.image}
                    alt=''
                  />
                </td>
                <td>{dado.name}</td>
                <td>{dado.job}</td>
                <td>{dado.admission_date}</td>
                <td>{dado.phone}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  )
}

export default Table
