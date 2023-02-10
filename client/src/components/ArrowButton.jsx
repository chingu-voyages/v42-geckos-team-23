import { useNavigate } from 'react-router-dom'
import { FaLessThan } from 'react-icons/fa'

const ArrowButton = ({ id, className = '' }) => {
    const navigate = useNavigate()

    const clickHandler = () => {
        navigate(-1)
    }

    const baseStyles = 'btn-primary btn-circle btn'
    const arrowButtonClassName = `${baseStyles} ${className}`

    return (
        <button className={arrowButtonClassName} onClick={clickHandler}>
            <FaLessThan />
        </button>
    )
}

export default ArrowButton
