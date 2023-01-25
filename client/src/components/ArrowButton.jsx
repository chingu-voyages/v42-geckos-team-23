import { FaGreaterThan } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ArrowButton = () => {
    return (
        <Link to='details'>
            <button className="btn-primary btn-circle btn">
                <FaGreaterThan />
            </button> 
        </Link>
        
    )
}

export default ArrowButton
