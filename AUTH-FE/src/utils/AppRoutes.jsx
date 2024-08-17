import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'
import AdminDashboard from '../components/AdminDashboard'
import UserDashboard from '../components/UserDashboard'
import {Navigate} from 'react-router-dom'
import AdminProtectedRoute from './AdminProtectedRoute'
import UserProtectedRoute from './UserProtectedRoute'
import ForgotPassword from '../components/ForgotPassword'
import PasswordReset from '../components/PasswordReset'

const AppRoutes = [
    {
        path: '/',
        element : <SignIn/>
    },
    {
        path: '/signup',
        element : <SignUp/>
    },
    {
        path: '/forgotPassword',
        element : <ForgotPassword/>
    },
    {
        path: '/passwordReset',
        element : <PasswordReset/>
    },
    {
        path: '/adminDashboard',
        element : <AdminProtectedRoute> <AdminDashboard/> </AdminProtectedRoute>
    },
    {
        path: '/userDashboard',
        element : <UserProtectedRoute> <UserDashboard/> </UserProtectedRoute>
    },
    {
        path: '*',
        element : <Navigate to='/'/>
    }
]

export default AppRoutes