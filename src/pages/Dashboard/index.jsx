/* eslint-disable react-hooks/exhaustive-deps */
import { api } from "../../services/api"
import { useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom";

import { EditTech } from "../../components/Modal/EditTech";
import { RegisterTech } from "../../components/Modal/RegisterTech";
import { DashboardContext } from "../../contexts/DashboardContext";
import { TechCard } from "../../components/TechCard";

import { Button } from "../../styles/button"
import { Container } from "../../styles/container"
import { DashBoardHeader, DashboardModules, DashboardUserInfo, TechCardList, TechHeader } from "./style"

export const Dashboard = () => {

    const { setEditTech, editTech, techInfo, setTechInfo, userInfo, setUserInfo, registerTech, setRegisterTech} = useContext(DashboardContext)

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
    }, [editTech, registerTech])


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
                <TechHeader>
                    <h3>Tecnologias</h3>
                    <button onClick={() => setRegisterTech(true)}>+</button>
                </TechHeader>

                <TechCardList>
                    {userInfo.techs?.map((cards) =>(
                        <TechCard key={cards.id} id={cards.id} cards={cards} setTechInfo={setTechInfo} setEditTech={setEditTech}/>
                    ))}
                </TechCardList>

            </DashboardModules>
            
            

         </main>

      </Container>
    )
}