import React from 'react'
import './InputTran.scss'
const InputTran = (props) => {

  const classes = ['InputTran']
  if (props.clazz) {
    classes.push(props.clazz)
  }

  if(!props.validate && props.touched) {
    classes.push('InputTran_Error')
  }

  return (
    <label className={classes.join(' ')} htmlFor={props.id}>
      <span className="InputTran-Name">{props.title}</span>
      <input className="InputTran-Inp"
        value={props.value}
        type={props.type}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.handleChenge}
        onBlur={props.handleBlur}
        onFocus={props.handleFocus}
        required={props.required}
      />
      <span className="InputTran-Error">{ !props.validate && props.touched ? props.errorMessage : ''}</span>
    </label>
  )
}

// InputTran-Inp_Error

export default InputTran