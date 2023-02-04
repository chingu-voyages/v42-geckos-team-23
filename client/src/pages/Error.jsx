import { useRouteError } from 'react-router-dom'
import errorpup from '../assets/errorpup.jpg'

import Navbar from '../components/Navbar'

const ErrorPage = () => {
    const error = useRouteError()

    return (
        <div className='font-nunito relative text-white'>
            <Navbar />
            <img className="h-screen" src={errorpup} alt="error background" />
            <div className='absolute top-1/2'>
                <h1>Error Page Tentative</h1>
                <p>Sorry, an unexpected er-ruf has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p> 
            </div>
        </div>
    )
}

export default ErrorPage