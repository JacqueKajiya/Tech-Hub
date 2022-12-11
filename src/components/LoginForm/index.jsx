import { useForm } from "react-hook-form"

import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"

import "react-toastify/dist/ReactToastify.css"
import { Button } from "../../styles/button"
import { StyledForm } from "../../styles/form"
import { FormContainer } from "./style"
import { ErrorMsg } from "../../styles/error"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { useNavigate } from "react-router-dom"

export const LoginForm = () =>{
    const { userLogin } = useContext(UserContext)

    const navigate = useNavigate()

    const loginSchema = yup.object().shape({
        email: yup.string().required("email obrigatório").email("email inválido"),
        password: yup.string().required("senha obrigatória"),
    })

    const {register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema),
    })

   
    return(
        <FormContainer>
            <h1>Login</h1>
            <StyledForm onSubmit={ handleSubmit (userLogin)}>
                    
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" placeholder = "Digite seu email" {...register("email")} />
                    {errors.email?.message && <ErrorMsg>{errors.email.message}</ErrorMsg>}

                    <label htmlFor="password">Senha</label>
                    <input id="password" type="password" placeholder = "Digite sua senha" {...register("password")} />
                    {errors.password?.message && <ErrorMsg>{errors.password.message}</ErrorMsg>}

                    <Button type="submit" className="buttonPink">Entrar</Button>

            </StyledForm>
            
            <div className = "registerLoginSection">
                <small>Ainda não possui uma conta?</small>
                <Button className="buttonGrey" onClick={() => navigate("/register")} type="button">Cadastre-se</Button>
            </div>
            
        </FormContainer>
    )
}