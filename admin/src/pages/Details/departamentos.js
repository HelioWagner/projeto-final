import React, {useEffect, useState } from 'react'
//import propTypes from 'prop-Types'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
//import './styles.css'
import getDepartamentos from '../../services/departamentos'

const Linha = () => {
  return (<tr>
    <td>Contabilidade</td>
    <td>Contabil</td>
    <td colSpan="2"> 
      <Button classeNome='btn btn-outline-primary btn-sm m-2' 
        text='Editar'
        classNameIcon='bi bi-pencil-fill m-1'/>
      <Button classeNome='btn btn-outline-danger btn-sm m-2' 
        text='Excluir'
        classNameIcon='bi bi-x-circle-fill m-1'/>  
    </td>
    <td></td>
  </tr>   
          
  )
}

// Row.propTypes = {
//   depto: PropTypes.shape.isRequired
// }

export const ListaDepartamentos = () => {
  
  const [departamentos, setDepartamentos] = useState()
  const [mensagem, setMensagem] = useState('Loading...')
 
  const loadDepartamentos = async () => {
    try {
      const result = await getDepartamentos()
      console.log(result)
      setDepartamentos(result.data)
    } catch (err) {
      setMensagem('Erro na API')
    }   

  }
  useEffect(() => {
    if (!departamentos) {
      loadDepartamentos()
    }
  }, [departamentos])
  


  return (
    <>
      
      <div className="row">
        <div className="col-8"> 
          <h2 className='text-danger'>Lista Departamentos</h2>
        </div>  
        <div className="col-4 text-end">
          {/* <Button classeNome='btn btn-success btn-sm m-3 opacity-75' text='+ Incluir'/> */}
          <Link className='btn btn-success btn-sm m-3 opacity-75' 
            to='/departamentos/new'
          >
            <i className="bi bi-plus"/>Incluir      
          </Link>
          
        </div>
      </div>  
      {!departamentos &&
         <div className='alert alert-dark'>{mensagem}</div>
      }
      {departamentos &&
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">Sigla</th>
                <th colSpan="2">Ações</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="align-middle">
              {departamentos && departamentos.map(d => {
                return (
                  <tr key={d.id_departamento}>
                    <td>{d.nome}</td>
                    <td>{d.sigla}</td>
                    <td>
                      <button type="button" className="btn btn-outline-warning me-3">
                        <i className="bi bi-pencil"/> Editar
                      </button>
                      <button type="button" className="btn btn-outline-danger">
                        <i className="bi bi-trash"/> Excluir
                      </button>
                    </td>
                  </tr>
                )
              })} 
              <Linha/>
              <tr>
                <td>Departamento Pessoal</td>
                <td>DP</td>
                <td colSpan="2"> 
                  <Button classeNome='btn btn-outline-primary btn-sm m-2' 
                    text='Editar'
                    classNameIcon='bi bi-pencil-fill m-1'/>
                  <Button classeNome='btn btn-outline-danger btn-sm m-2' 
                    text='Excluir'
                    classNameIcon='bi bi-x-circle-fill m-1'/> 
                </td>
                <td></td>
              </tr> 

              {/* <tr>
                <td>Financeiro</td>
                <td>FI</td>
                <td colSpan="2"> 
                  <Button classeNome='btn btn-outline-primary btn-sm m-2' 
                    text='Editar'
                    classNameIcon='bi bi-pencil-fill m-1'/>
                  <Button classeNome='btn btn-outline-danger btn-sm m-2'
                    text='Excluir'
                    classNameIcon='bi bi-x-circle-fill m-1'/> 
                </td>
                <td></td>
              </tr>   */}

            </tbody>
          </table>
      }
    </>
  )
}

export default ListaDepartamentos