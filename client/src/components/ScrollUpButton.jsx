import { FaArrowUp } from 'react-icons/fa'

const ScrollUpButton = ({ size = 24, className = '' }) => {
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <button
            className={className}
            onClick={handleClick}
        >
            <FaArrowUp size={size} fill="#fff" />
        </button>
    )
}

export default ScrollUpButton
