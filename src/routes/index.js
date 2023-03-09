import { Navigate } from 'react-router-dom'
import Login from '../modules/login'
import Control from '../modules/control'

const routes = [
    {
        path: '/',
        element: <Navigate to='/control' />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/control',
        element: <Control />
    }
]

export { routes }