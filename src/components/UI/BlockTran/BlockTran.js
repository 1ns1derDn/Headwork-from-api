import React from 'react'
import './BlockTran.scss'
const BlockTran = ({ children, clazz }) => {
  let classes = ["BlockTran"]

  if (clazz) {
    classes.push(clazz)
  }

  return (
    <div className={classes.join(' ')}>
      {children}
    </div>
  )
}

export default BlockTran