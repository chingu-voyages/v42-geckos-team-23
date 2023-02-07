import React from 'react'

const Form = ({ children, ...delegated }) => {
    return <form {...delegated}>{children}</form>
}

export default Form
