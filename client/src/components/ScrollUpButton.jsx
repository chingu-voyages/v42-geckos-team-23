import { FaArrowAltCircleUp } from 'react-icons/fa'

const ScrollUpButton = ({ size = 43 }) => {
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <button
            className="absolute right-0 top-1/2 -translate-y-1/2"
            onClick={handleClick}
        >
            <FaArrowAltCircleUp className="icon" size={size} fill="#ef4444" />
        </button>
    )
}

export default ScrollUpButton
