import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { UserContext } from "../contexts/UserContext"

export const ProtectedRoutes = () =>{

    const { userData, loading } = useContext(UserContext)
    if (loading){
        return null
    }
    
    return userData ? <Outlet/> : <Navigate to="/"/>
}