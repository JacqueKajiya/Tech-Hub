
import { useForm } from "react-hook-form"

import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

import { StyledForm } from "../../styles/form"
import { FormContainer } from "../RegisterForm/style"
import { Button } from "../../styles/button"
import { ErrorMsg } from "../../styles/error"
import "react-toastify/dist/ReactToastify.css"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"


export const RegisterForm = () =>{
    const { registerNewUser } = useContext(UserContext)

    const registerSchema = yup.object().shape({
        name: yup.string()
        .required("Nome obrigatório")
        .min(3, "O nome precisa ter pelo menos 3 caracteres"),

        email: yup.string().required("Email obrigatório").email("Email inválido"),

        password: yup.string()
        .required("Senha obrigatória")
        .matches(/(?=.*?[0-9])/, "É necessário pelo menos um número")
        .matches(/(?=.*?[#?!@$%^&*-])/, "É necessário pelo menos um caractere especial")
        .min(8, "A senha precisa ter no mínimo 8 caracteres"),

        confirmPassword: yup.string()
        .required("Confirmação de senha obrigatória")
        .oneOf([yup.ref('password')], "As senhas precisam ser iguais"),

        bio: yup.string().required("Campo obrigatório"),

        contact: yup.string().required("Contato obrigatório").min(11, "Coloque o número completo com DDD"),
        
        course_module: yup.string().required("Escolha um módulo"),  
})

    const {register, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(registerSchema),
})

    return(
        <FormContainer>
            <h2>Crie sua conta</h2>
            <small>Rápido e grátis, vamos nessa</small>

            <StyledForm onSubmit={ handleSubmit(registerNewUser) }>
                
                <label htmlFor="name">Nome</label>
                <input id="name" type="text" placeholder = "Digite aqui seu nome" {...register("name")} />
                {errors.name?.message && <ErrorMsg>{errors.name.message}</ErrorMsg>}
        
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder = "Digite aqui seu email" {...register("email")} />
                {errors.email?.message && <ErrorMsg>{errors.email.message}</ErrorMsg>}

                <label htmlFor="password">Senha</label>
                <input id="password" type="password" placeholder = "Digite aqui sua senha" {...register("password")} />
                {errors.password?.message && <ErrorMsg>{errors.password.message}</ErrorMsg>}

                <label htmlFor="confirmPassword">Confirmar Senha</label>
                <input id="confirmPassword" type="password" placeholder = "Confirme sua senha" {...register("confirmPassword")} />
                {errors.confirmPassword?.message && <ErrorMsg>{errors.confirmPassword.message}</ErrorMsg>}

                <label htmlFor="bio">Bio</label>
                <input id="bio" type="bio" placeholder = "Fale sobre você" {...register("bio")} />
                {errors.bio?.message && <ErrorMsg>{errors.bio.message}</ErrorMsg>}

                <label htmlFor="contact">Contato</label>
                <input id="contact" type="contact" placeholder = "Opção de contato" {...register("contact")} />
                {errors.contact?.message && <ErrorMsg>{errors.contact.message}</ErrorMsg>}

                <label htmlFor="module">Selecionar módulo</label>
                    <select id="module" {...register("course_module")}>
                        <option value="Primeiro módulo">Primeiro módulo (Introdução ao Frontend)</option>
                        <option value="Segundo módulo">Segundo módulo (Frontend Avançado)</option>
                        <option value="Terceiro módulo">Terceiro módulo (Introdução ao Backend)</option>
                        <option value="Quarto módulo">Quarta módulo (Backend Avançado)</option>
                    </select>
                {errors.module?.message && <ErrorMsg>{errors.module.message}</ErrorMsg>}
        
                <Button type="submit" className="buttonPink">Cadastrar</Button>
        
            </StyledForm>

        </FormContainer>
    )
}