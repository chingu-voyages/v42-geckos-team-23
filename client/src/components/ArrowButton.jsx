import { useNavigate } from 'react-router-dom'
import { FaGreaterThan, FaLessThan } from 'react-icons/fa'

const ArrowButton = ({ id, direction = 'prev', className = '' }) => {
    const navigate = useNavigate()

    const clickHandler = (e) => {
        e.preventDefault()

        { direction === 'next' && navigate(`details/${id}`) }
        { direction === 'prev' && navigate(-1) }

    }
    const baseStyles = 'btn-primary btn-circle btn'
    const arrowButtonClassName = `${baseStyles} ${className}`

    return (
        <button className={arrowButtonClassName} onClick={clickHandler}>
            {direction === 'prev' ? <FaLessThan /> : <FaGreaterThan />}
        </button>
    )
}

export default ArrowButton
