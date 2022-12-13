import { useContext } from "react"
import { useRef, useState, useEffect } from "react"
import { useForm } from "react-hook-form"

import { DashboardContext } from "../../../contexts/DashboardContext"
import { TechContext } from "../../../contexts/TechContext"

import { ModalBox, ModalForm, ModalHeader, ModalWrapper } from "../../../styles/modal"
import { ModalEditButtons } from "./style"

export const EditTech = () => {
    const { setEditTech, techInfo } = useContext(DashboardContext)
    const { updateTech, deleteTech } = useContext(TechContext)

    const [editTitle, setEditTitle] = useState(techInfo.title)
    const [editStatus, setEditStatus] = useState(techInfo.status)

    const {register, handleSubmit} = useForm({
        defaultValues:{
            title: techInfo.title,
            status: techInfo.status
        }
    })

    const handleForm = (data) =>{
        const editedTech = {
            title: data.title,
            status: data.status
        }
        updateTech(editedTech)
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
                <ModalHeader>
                    <h2>Tecnologia Detalhes</h2>
                    <button type="button" onClick={() => setEditTech(false)}>X </button>
                </ModalHeader>

                <ModalForm onSubmit={handleSubmit(handleForm)}>
                    <label htmlFor="title">Nome do Projeto</label>
                    <input id="title" type="text" {...register("title")} />

                    <label htmlFor="status">Status</label>
                    <select value={editStatus} {...register("status")}>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>

                    <ModalEditButtons>
                        <button class="saveButton" type="submit">Salvar alterações</button>
                        <button class="deleteButton" type="button" onClick={() => deleteTech()}>Excluir</button>
                    </ModalEditButtons>

                </ModalForm>
            

            </ModalBox>
        </ModalWrapper>
    )
}