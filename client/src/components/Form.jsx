import React from 'react'

function Form({children, ...delegated}) {
  return (
    <form {...delegated}>
        {children}
    </form>
  )
}

export default Form
