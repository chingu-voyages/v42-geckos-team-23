import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Modal from 'react-modal'

import { ContextProvider } from './contexts/Context'
import App from './App'
import Details from './pages/Details'
import ErrorPage from './pages/Error'
import './index.css'

Modal.setAppElement('#root')

const router = createHashRouter([
    {
        path: "/", // "home page"
        element: <App />,
        errorElement: <ErrorPage />
    },
    {
        path: "details/:id",
        element: <Details />
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ContextProvider>
            <RouterProvider router={router} />
        </ContextProvider>
    </React.StrictMode>
)
