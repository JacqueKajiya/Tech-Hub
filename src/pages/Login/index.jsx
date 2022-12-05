import { LoginForm } from "../../components/LoginForm"
import { Container } from "../../styles/container"

export const Login = () => {

      return (
        <Container>
            <div>
                <img src="./assets/img/Logo.png" alt="KenzieHub Logo" />
            </div>
            <LoginForm />
        </Container>
    )
}