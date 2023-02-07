import React from 'react'

const RadioButton = ({ label, name, category, value, onChange}) => {
  return (
    <label>
        <input className="mr-1" type="radio" data-category={category} data-category-name={label} name={name} checked={value} onChange={onChange} required />
        {label}
    </label>
  )
}

export default RadioButton
