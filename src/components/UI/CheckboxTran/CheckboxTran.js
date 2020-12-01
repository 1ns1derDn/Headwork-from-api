import React from 'react'
import './CheckboxTran.scss'

const CheckboxTran = ({ id, clazz, title, action, name, checked }) => {

  let classes = ["CheckboxTran"]
  if (clazz) {
    classes.push(clazz)
  }

  return (
    <div className={classes.join(' ')}>
      <input
        type="checkbox"
        name={name}
        className="CheckboxTran-Inp"
        onChange={action}
        id={id}
        checked={checked}
      />
      <label
        className="CheckboxTran-Label"
        htmlFor={id}
      >
        {title}
      </label>
    </div>
  )
}

export default CheckboxTran