import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
    const error = useRouteError()
    console.log(error)

    return (
        <div>
            <h1><b>Error Page Tentative</b></h1>
            <p>Sorry, an unexpected er-ruf has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}