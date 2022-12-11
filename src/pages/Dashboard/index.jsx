import { api } from "../../services/api"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

import { Button } from "../../styles/button"
import { Container } from "../../styles/container"
import { DashBoardHeader, DashboardModules, DashboardUserInfo } from "./style"
import { RegisterTech } from "../../components/Modal/RegisterTech";
import { EditTech } from "../../components/Modal/EditTech";

export const Dashboard = () => {
    const [userInfo, setUserInfo] = useState({})
    const [registerTech, setRegisterTech] = useState(false)
    const [editTech, setEditTech] = useState(false)
    const [techInfo, setTechInfo] = useState({})

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
    }, [registerTech, editTech])


    const logOut = () => {
        localStorage.clear()
        navigate("/")
   }


    return (
      <Container>
        {registerTech && <RegisterTech setRegisterTech={setRegisterTech}/>}
        {editTech && <EditTech techInfo={techInfo} setEditTech={setEditTech}/>}

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
                <h3>Tecnologias</h3>
                <button onClick={() => setRegisterTech(true)}>+</button>
            </DashboardModules>
            
            <ul>
                {userInfo.techs?.map((cards) =>(
                    <li id={cards.id} key={cards.id} onClick={() => {
                        setTechInfo(cards) 
                        setEditTech(true)}}>

                        <span>{cards.title}</span>
                        <small>{cards.status}</small>
                    </li>
                ))}
            </ul>

         </main>

      </Container>
    )
}