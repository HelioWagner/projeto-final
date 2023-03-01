import React from 'react'
import { 
  BrowserRouter, 
  Route, 
  Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Menu from './components/Menu'
import Home from './pages/Home'
import { ListaDepartamentos } from './pages/Details/departamentos.js'
import FormDepartamentos from './pages/FormDepartamentos'


function App() {
  return ( 
    <>
      <BrowserRouter>
        <Menu/>
        <div className='container'>
          <Routes>
            <Route path='/'>
              <Route index element={<Home/>}/>
              <Route path='departamentos'>
                <Route index element={<ListaDepartamentos/>}/>  
                <Route path='new' element={<FormDepartamentos/>}/>
                <Route path=':idDepartamento' element={<h1>Editar Departamento</h1>}/>
              </Route>
            </Route>
          </Routes>
        </div>
          
      </BrowserRouter>
    </>
  )
}

export default App
