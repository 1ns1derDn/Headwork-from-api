import React from 'react'
import './RadioTran.scss'

const RadioTran = props => {

  const classes = ["RadioTran"]
  
  if (props.clazz) {
    classes.push(props.clazz)
  }

  return (
    <div className={classes.join(' ')}>
      <input
        className="RadioTran-Inp"
        type="radio"
        name={props.name}
        value={props.value}
        id={props.id}
        onChange={props.handleChange}
        required={props.required}
      />
      <label
        className="RadioTran-Label"
        htmlFor={props.id}
      >
        {props.textHtml}
      </label>
    </div>
  )
}

export default RadioTran
