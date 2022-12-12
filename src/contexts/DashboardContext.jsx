import { createContext, useState } from "react";

export const DashboardContext = createContext({})

export const DashboardProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({})
    const [registerTech, setRegisterTech] = useState(false)
    const [techInfo, setTechInfo] = useState({})
    const [editTech, setEditTech] = useState(false)

    return(
        <DashboardContext.Provider value={{ userInfo, setUserInfo, registerTech, setRegisterTech,techInfo, setTechInfo, setEditTech, editTech}}>
            { children }
        </DashboardContext.Provider>
    )

}