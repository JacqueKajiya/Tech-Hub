import { useRef, useState, useEffect } from "react"
import { useForm } from "react-hook-form"

import { toast } from "react-toastify"
import { api } from "../../../services/api"
import { StyledForm } from "../../../styles/form"

import { ModalBox, ModalWrapper } from "../RegisterTech/style"

export const EditTech = ({techInfo, setEditTech}) => {
    const token = localStorage.getItem("Token")

    const [editTitle, setEditTitle] = useState(techInfo.title)
    const [editStatus, setEditStatus] = useState(techInfo.status)

    
    const {register, handleSubmit} = useForm({
        defaultValues:
        {
            title: editTitle,
            status: editStatus
        }
    })

    const handleForm = (data) =>{
        const editedTech = { 
            title: data.title,
            status: data.status }
        updateTech(editedTech)
    }


    const updateTech = async (data) => {

        try {
            const response = await api.put(`users/techs/${techInfo.id}`, data, {
                headers: {authorization : `Bearer ${token}`}
            })
            
            toast.success("Tecnologia atualizada!")

            setEditTech(false)

        } catch (error) {
            console.error(error)
            toast.error("Ops, algo deu errado!")
        }
    }

    const deleteTech = async () => {
        try {
            const response = await api.delete(`users/techs/${techInfo.id}`, {
                headers: {authorization : `Bearer ${token}`}
            })
                toast.success("Tecnologia excluida com sucesso!")
                setEditTech(false)
        } catch (error) {
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
                setEditTech(false)
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
                <header>
                    <h2>Tecnologia Detalhes</h2>
                    <button type="button" onClick={() => setEditTech(false)}>X </button>
                </header>

                <StyledForm onSubmit={handleSubmit(handleForm)}>

                    <label htmlFor="title">Nome do Projeto</label>
                    <input id="title" type="text" {...register("title") } />

                    <label htmlFor="status"></label>
                    <select {...register("status")}>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>

                    <div>
                        <button type="submit">Salvar alterações</button>
                        <button type="button" onClick={() => deleteTech()}>Excluir</button>
                    </div>

                </StyledForm>
            

            </ModalBox>
        </ModalWrapper>
    )
}