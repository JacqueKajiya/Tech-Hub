import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { useEffect, useRef } from "react"

import { toast } from "react-toastify"
import * as yup from "yup"
import { api } from "../../services/api"

import { ModalBox, ModalWrapper } from "./style"
import { StyledForm } from "../../styles/form"
import { ErrorMsg } from "../../styles/error"

export const RegisterTech = ({ setRegisterTech }) =>{
    const token = localStorage.getItem("Token")

    const techSchema = yup.object().shape({
        title: yup.string().required("Coloque um nome"),
        status: yup.string().required("Selecione um status")
    })
    
    const {register, handleSubmit, formState: { errors }} = useForm({ resolver: yupResolver(techSchema)})

    const handleTechForm = (data) => {
        newTech(data)
    }

    const newTech = async (data) => {

        try{
            toast.loading("Cadastro em andamento..")
            const response = await api.post("users/techs", data, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })

            toast.success("Tecnologia cadastrada!")
            setRegisterTech(false)

        }catch(error){
            console.error(error)
            toast.error("Ops, algo deu errado!")
        }
    }

    const modalRef = useRef(null)

    useEffect(() => {

        function closeModal(event){
            const target = event.target
            const element = modalRef.current

            if(!element.contains(target)){
                setRegisterTech(null)
            }
        }

        window.addEventListener("mousedown", closeModal)

        return () => {
            window.removeEventListener("mousedown", closeModal)
        }
    }, [])

    return(
        <ModalWrapper>
            <ModalBox ref={modalRef}>
                <h3>Cadastrar Tecnologia</h3>
                <button type="button" onClick={() => setRegisterTech(false)}> X </button>
                <StyledForm onSubmit={handleSubmit(handleTechForm)}>
                
                    <label htmlFor="name">Nome</label>
                    <input id="name" type="text" {...register("title")} />
                    {errors.title?.message && <ErrorMsg>{errors.title.message}</ErrorMsg>}

                    <label htmlFor="status">Selecionar Status</label>
                    <select id="status" {...register("status")}>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                    {errors.status?.message && <ErrorMsg>{errors.status.message}</ErrorMsg>}
                
                <button type="submit">Cadastrar Tecnologia</button>
                </StyledForm>
            </ModalBox>
        </ModalWrapper>
    )    
}

