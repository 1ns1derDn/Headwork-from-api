import React from 'react'
import InputMask from 'react-input-mask'
const InputWithMask = (props) => {
  
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
      <InputMask
        className={"InputTran-Inp"}
        mask={props.mask}
        name={props.name}
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        onFocus={props.handleOnFocus}
        id={props.id}
        value={props.value}
        type={props.type}
        placeholder={props.placeholder}
        required={props.required}
      />
      <span className="InputTran-Error">{ !props.validate && props.touched ? props.errorMessage : ''}</span>
    </label>
  )
}

export default InputWithMask