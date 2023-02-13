import { FaArrowUp } from 'react-icons/fa'

const ScrollUpButton = ({ size = 24 }) => {
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <button
            className="icon-button absolute right-0"
            onClick={handleClick}
        >
            <FaArrowUp size={size} fill="#fff" />
        </button>
    )
}

export default ScrollUpButton
