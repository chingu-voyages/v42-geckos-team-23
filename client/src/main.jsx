import React from 'react'
import ReactDOM from 'react-dom/client'
import { ContextProvider } from '../Context'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import App from './App'
import Details from './pages/Details'
import ErrorPage from './pages/Error'

const router = createBrowserRouter([
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
