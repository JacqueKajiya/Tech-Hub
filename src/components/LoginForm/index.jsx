import { useForm } from "react-hook-form"
import { toast } from "react-toastify"

import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"

import { useNavigate } from "react-router-dom"
import { api } from "../../services/api"

import { Button } from "../../styles/button"
import { StyledForm } from "../../styles/form"
import { FormContainer } from "./style"

export const LoginForm = () =>{
    const loginSchema = yup.object().shape({
        email: yup.string().required("email obrigatório").email("email inválido"),
        password: yup.string().required("senha obrigatória"),
    })

    const {register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema),
    })

    const navigate = useNavigate()

    const userLogin = async (userData) => {
        try {
            const response = await api.post("sessions", userData)
            localStorage.setItem("Token", response.data.token)
            localStorage.setItem("UserId", response.data.user.id)
            navigate("/dashboard")
            toast.success("Usuário logado")

        } catch (error) {
            console.error(error)
            toast.error("Algo deu errado")
        }
    }
   
    return(
        <FormContainer>
            <h1>Login</h1>
            <StyledForm onSubmit={ handleSubmit (userLogin)}>
                    
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" placeholder = "Digite seu email" {...register("email")} />
                    {errors.email?.message && <span>{errors.email.message}</span>}

                    <label htmlFor="password">Senha</label>
                    <input id="password" type="password" placeholder = "Digite sua senha" {...register("password")} />
                    {errors.password?.message && <span>{errors.password.message}</span>}

                    <Button type="submit" className="buttonPink">Entrar</Button>

            </StyledForm>
            
            <div className = "registerLoginSection">
                <small>Ainda não possui uma conta?</small>
                <Button className="buttonGrey" onClick={() => navigate("/register")} type="button">Cadastre-se</Button>
            </div>
            
        </FormContainer>
    )
}