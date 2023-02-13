import { useNavigate, useRouteError } from 'react-router-dom'

import errorpup from '../assets/errorpup.jpg'

const ErrorPage = () => {
    const error = useRouteError()
    const navigate = useNavigate()

    return (
        <div className="relative font-nunito text-white">
            <img className="min-h-screen object-cover" src={errorpup} alt="" />
            <div className="absolute bottom-1 right-4 sm:bottom-3 sm:right-5 md:bottom-5 md:right-6 lg:bottom-16 lg:right-10">
                <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-7xl">
                    Close! But no cookie!
                </h1>
                <p className="md:text-xl">
                    An unexpected 'er-ruf' has occurred.
                </p>
                <p className="flex md:text-lg">
                    <i>404 Page {error.statusText || error.message}</i>
                    <button
                        className="ml-5 rounded bg-red-500 px-2 transition duration-200 ease-in-out hover:cursor-pointer hover:bg-red-700 active:scale-95  active:bg-red-700"
                        onClick={() => navigate('/')}
                    >
                        Back to GoPup
                    </button>
                </p>
            </div>
        </div>
    )
}

export default ErrorPage
