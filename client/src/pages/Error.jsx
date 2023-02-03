import { useRouteError } from 'react-router-dom'

import Navbar from '../components/Navbar'

const ErrorPage = () => {
    const error = useRouteError()

    return (
        <div>
            <Navbar />
            <h1><b>Error Page Tentative</b></h1>
            <p>Sorry, an unexpected er-ruf has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}

export default ErrorPage