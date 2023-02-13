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
            className="absolute right-0 top-1/2 -translate-y-1/2 icon-button bg-red-500"
            onClick={handleClick}
        >
            <FaArrowUp size={size} fill="#fff" />
        </button>
    )
}

export default ScrollUpButton

