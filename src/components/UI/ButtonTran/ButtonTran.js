import React from 'react'
import './ButtonTran.scss'

const ButtonTran = ({ clazz, handleClick, refLink, children }) => {

  const classes = ["ButtonTran"]

  if (clazz) {
    classes.push(clazz)
  }

  return (
    <button
      className={classes.join(' ')}
      onClick={handleClick}
      ref={refLink}
    >
      {children}
    </button>
  )
}

export default ButtonTran

