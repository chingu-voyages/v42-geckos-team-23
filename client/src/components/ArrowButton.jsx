import { FaGreaterThan } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const ArrowButton = ({ id }) => {
    const navigate = useNavigate()

    const clickHandler = (e) => {
        e.preventDefault()

        navigate(`details/${id}`)
    }

    return (
        <button className="btn-primary btn-circle btn" onClick={clickHandler}>
            <FaGreaterThan />
        </button>
    )
}

export default ArrowButton

