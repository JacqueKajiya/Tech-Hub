import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"

import { Button } from "../../styles/button"
import { Container } from "../../styles/container"
import { DashBoardHeader, DashboardModules, DashboardUserInfo } from "./style"

export const Dashboard = () => {
    const [userInfo, setUserInfo] = useState([])
    const navigate = useNavigate()

    const userId = localStorage.getItem("UserId")

    useEffect(() => {
        (async () =>{
            try{
               const response = await api.get(`users/${userId}`)
               setUserInfo(response.data)
            }
            catch(error){
                console.log(error)
            }
        })()
    }, [userId])

    const logOut = () => {
        localStorage.clear()
        navigate("/")
   }

    return (
      <Container>
         <DashBoardHeader>
            <div>
                <img src="./assets/img/Logo.png" alt="KenzieHub Logo" />
                <Button className="logOutButton" type="button" onClick={() => logOut()}>Sair</Button>
            </div>
         </DashBoardHeader>
        
         <main>
            <DashboardUserInfo>
                <div>
                    <h2> Olá, {userInfo.name}</h2>
                    <p>{userInfo.course_module}</p>
                </div>
            </DashboardUserInfo>

            <DashboardModules>
                <h4> Que pena, estamos em desenvolvimento :( </h4>
                <p className="application">Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
            </DashboardModules>
         </main>

      </Container>
  )
}