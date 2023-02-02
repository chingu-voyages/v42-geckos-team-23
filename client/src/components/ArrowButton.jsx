import { forwardRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaGreaterThan, FaLessThan } from 'react-icons/fa'

const ArrowButton = ({ id, direction = 'prev', className = '' }, ref) => {
    const navigate = useNavigate()

    const clickHandler = (e) => {
        e.preventDefault()

        navigate(`details/${id}`)
    }
    const baseStyles = 'btn-primary btn-circle btn'
    const arrowButtonClassName = `${baseStyles} ${className}`

    return (
        <button
            ref={ref}
            className={arrowButtonClassName}
            onClick={clickHandler}
        >
            {direction === 'prev' ? <FaLessThan /> : <FaGreaterThan />}
        </button>
    )
}

export default forwardRef(ArrowButton)
