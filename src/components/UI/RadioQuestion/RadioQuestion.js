import React from 'react'
import './RadioQuestion.scss'

const RadioQuestion = props => {

  const classes = ["RadioQuestion"]

  if(props.clazz) {
    classes.push(props.clazz)
  }

  return (
    <div className={classes.join(' ')}>
      <span className="RadioQuestion-Title">{props.title}</span>
      <div className="RadioQuestion-Box">
        {props.children}
      </div>
    </div>
  )
}

export default RadioQuestion