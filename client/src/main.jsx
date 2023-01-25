import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ContextProvider } from '../Context'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App'
import Page1 from './page1'
import ErrorPage from './error-page'

const router = createBrowserRouter([
    {
        path: "/", // "home page"
        element: <App />,
        errorElement: <ErrorPage />
    },
    {
        path:"page1",
        element: <Page1 />
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ContextProvider>
            <RouterProvider router={router} />
        </ContextProvider>
    </React.StrictMode>
)
