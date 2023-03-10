import React from 'react'

const Menu2 = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">ADMIN</a>
          
          <button 
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#"
                  role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Departamentos
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Cadastrar</a></li>
                  <li><a className="dropdown-item" href="#">Listar</a></li>
                </ul>
              </li>             
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search"
                placeholder="Search" aria-label="Search"/>
              <button className="btn btn-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Menu2