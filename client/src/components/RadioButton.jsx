import React from 'react'

function RadioButton({ label, category, value, onChange}) {
  return (
    <label>
        <input className="mr-1" type="radio" data-category={category} data-category-name={label} checked={value} onChange={onChange} required />
        {label}
    </label>
  )
}

export default RadioButton
