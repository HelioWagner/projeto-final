import React from 'react'
//import './styles.css'

//export const Button = ({text, classeNome,classNameIcon }) => {
const Button = ({text, classeNome,classNameIcon }) => {  
  return (
    <>     
      <button type="button" className={classeNome}>
        <i className={classNameIcon}/> 
        {text}</button>
    </>  
  )
}

export default Button