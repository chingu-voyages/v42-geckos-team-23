import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

const ArrowButton = ({ className = '' }) => {
    const navigate = useNavigate()

    const clickHandler = () => {
        navigate(-1)
    }

    const baseStyles = 'icon-button'
    const arrowButtonClassName = `${baseStyles} ${className}`

    return (
        <button className={arrowButtonClassName} onClick={clickHandler}>
            <FaArrowLeft fill="#fff" size={24} />
        </button>
    )
}

export default ArrowButton
