import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { LoginForm } from "../../components/LoginForm"
import { Container } from "../../styles/container"

export const Login = () => {
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("Token")

        if(token){
            navigate("/dashboard", { replace: true })
        }
        setLoading(false)
    }, [navigate])

    if(loading){
        return null
    }

      return (
        <Container>
            <div>
                <img src="./assets/img/Logo.png" alt="KenzieHub Logo" />
            </div>
            <LoginForm />
        </Container>
    )
}