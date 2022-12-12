import { useContext } from "react"
import { useRef, useState, useEffect } from "react"
import { useForm } from "react-hook-form"

import { DashboardContext } from "../../../contexts/DashboardContext"
import { TechContext } from "../../../contexts/TechContext"
import { StyledForm } from "../../../styles/form"

import { ModalBox, ModalWrapper } from "../RegisterTech/style"

export const EditTech = () => {
    const { setEditTech, techInfo } = useContext(DashboardContext)
    const { updateTech, deleteTech } = useContext(TechContext)

    const [editTitle, setEditTitle] = useState(techInfo.title)
    const [editStatus, setEditStatus] = useState(techInfo.status)

    const {register, handleSubmit} = useForm()

    const handleForm = (newData) =>{
        const editedTech = {status: newData.status}
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
                <header>
                    <h2>Tecnologia Detalhes</h2>
                    <button type="button" onClick={() => setEditTech(false)}>X </button>
                </header>

                <StyledForm onSubmit={handleSubmit(handleForm)}>
                    <label htmlFor="title">Nome do Projeto</label>
                    <input id="title" type="text" value={editTitle} {...register("title")} />

                    <label htmlFor="status"></label>
                    <select value={editStatus} {...register("status")}>
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