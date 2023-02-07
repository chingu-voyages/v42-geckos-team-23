import { useNavigate, useRouteError } from 'react-router-dom'

import errorpup from '../assets/errorpup.jpg'

const ErrorPage = () => {
    const error = useRouteError()
    const navigate = useNavigate()

    return (
        <div className='font-nunito relative text-white'>
            <img className="" src={errorpup} alt="" />
            <div className='absolute bottom-1 sm:bottom-3 md:bottom-5 lg:bottom-16 right-4 sm:right-5 md:right-6 lg:right-10'>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">Close! But no cookie!</h1>
                <p className='md:text-xl'>An unexpected 'er-ruf' has occurred.</p>
                <p className='flex md:text-lg'>
                    <i>404 Page {error.statusText || error.message}</i>
                    <p className='ml-5 px-2 rounded bg-blue-500 hover:cursor-pointer active:text-gray-400' onClick={() => navigate('/')}>Back to GoPup</p>
                </p>
            </div>
        </div>
    )
}

export default ErrorPage
