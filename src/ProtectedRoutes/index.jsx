import { useContext } from "react"
import { Navigate, Outlet, useLocation } from "react-router-dom"
import { UserContext } from "../contexts/UserContext"

export const ProtectedRoutes = () =>{

    const location = useLocation()

    const { userData, loading } = useContext(UserContext)
    if (loading){
        return null
    }
    
    return userData ? <Outlet/> : <Navigate to="/" state={{ from: location }}/>
}