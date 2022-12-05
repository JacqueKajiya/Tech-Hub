import { useNavigate } from "react-router-dom"

import { RegisterForm } from "../../components/RegisterForm"
import { RegisterHeader } from "../../components/RegisterForm/style"
import { Container } from "../../styles/container"
import { Button } from "../../styles/button"

export const Register = () => {
     const navigate = useNavigate()

    return (
        <Container>
            <RegisterHeader>
                <img src="./assets/img/Logo.png" alt="KenzieHub Logo" />
                <Button className= "backToLoginButton" onClick={()=> navigate("/")}>Voltar</Button>
            </RegisterHeader>
                <RegisterForm/>
        </Container>
    )
}