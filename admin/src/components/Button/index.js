import React from 'react'
import './styles.css'

//export const Button = ({text, classeNome }) => {
const Button = ({text, classeNome }) => {  
  return (
    <>     
      <button type="button" className={classeNome}>{text}</button>
    </>  
  )
}

export default Button