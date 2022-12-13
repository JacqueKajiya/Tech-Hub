import { api } from "../services/api";
import { toast } from "react-toastify";

import { useContext } from "react";
import { createContext } from "react";
import { DashboardContext } from "./DashboardContext";

export const TechContext = createContext({})

export const TechProvider = ({ children }) =>{

    const {techInfo, setEditTech} = useContext(DashboardContext)

    const token = localStorage.getItem("Token")

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


    return (
        <TechContext.Provider value={{updateTech, deleteTech}}>
            {children}    
        </TechContext.Provider>
    )
}