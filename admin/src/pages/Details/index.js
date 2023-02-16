import React from 'react'
import Button from '../../components/Button'
import './styles.css'

const ListaDepartamentos = () => {
  return (
    <>
      
      <div className='Titulo'>
        <h2>Departamentos</h2>
        <Button classeNome='btn btn-secondary btn-sm' text='+ Incluir'/>
      </div>  
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Sigla</th>
            <th colSpan="2">Ações</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Contabilidade</td>
            <td>Contabil</td>
            <td colSpan="2"> 
              <Button classeNome='btn btn-outline-warning btn-sm' text='Editar'/>
              <Button classeNome='btn btn-outline-danger btn-sm' text='Excluir'/>  
            </td>
            <td></td>
          </tr>
          <tr>
            <td>Departamento Pessoal</td>
            <td>DP</td>
            <td colSpan="2"> 
              <Button classeNome='btn btn-outline-warning btn-sm' text='Editar'/>
              <Button classeNome='btn btn-outline-danger btn-sm' text='Excluir'/> 
            </td>
            <td></td>
          </tr> 

          <tr>
            <td>Financeiro</td>
            <td>FI</td>
            <td colSpan="2"> 
              <Button classeNome='btn btn-outline-warning btn-sm' text='Editar'/>
              <Button classeNome='btn btn-outline-danger btn-sm' text='Excluir'/> 
            </td>
            <td></td>
          </tr>  

        </tbody>
      </table>
    </>
  )
}

export default ListaDepartamentos