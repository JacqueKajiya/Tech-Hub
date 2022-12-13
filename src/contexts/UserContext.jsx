import { createContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const UserContext = createContext ({})

export const UserProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [userData, setUserData] = useState(null)

    const navigate = useNavigate()
    const location = useLocation()

    const token = localStorage.getItem("Token")

    useEffect(() => {
        async function loadUser() {

            if(!token){
                setLoading(false)
                return
            }

            try{
                api.defaults.headers.common.authorization = `Bearer ${token}`
                const response = await api.get("profile")

                setUserData(response.data)

            }catch (error){
                console.error(error)
            }finally{
                setLoading(false)
            }

        }
        loadUser()
    }, [])


    const userLogin = async (data) => {
        try {
            const response = await api.post("sessions", data)
                setUserData(response.user)

                localStorage.setItem("Token", response.data.token)
                localStorage.setItem("UserId", response.data.user.id)

                toast.success("Usuário logado")
                setUserData(response.data.user)

                api.defaults.headers.common.authorization = `Bearer ${token}`

                const toNavigate = location.state?.from?.pathname || "/dashboard"

                navigate(toNavigate, { replace : true })

        } catch (error) {
            console.error(error)
            toast.error("Ops, algo deu errado!")
        }
    }

    const registerNewUser = async (data) => {
        try{
            const response = await api.post("users", data)
            navigate("/")
            toast.success("Conta criada com sucesso!")

        } catch (error) {
            toast.error("Ops, algo deu errado!")
            console.error(error)
    }
}


    return(
        <UserContext.Provider value={{userLogin, userData, loading, registerNewUser}}>
            { children }
        </UserContext.Provider>

    )
}