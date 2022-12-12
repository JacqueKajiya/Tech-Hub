import { api } from "../../services/api"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

import { Button } from "../../styles/button"
import { Container } from "../../styles/container"
import { DashBoardHeader, DashboardModules, DashboardUserInfo } from "./style"
import { RegisterTech } from "../../components/Modal/RegisterTech";
import { EditTech } from "../../components/Modal/EditTech";
import { useContext } from "react";
import { DashboardContext } from "../../contexts/DashboardContext";
import { TechCard } from "../../components/TechCard";

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
    }, [])


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
                <section>
                    <h3>Tecnologias</h3>
                    <button onClick={() => setRegisterTech(true)}>+</button>
                </section>

                <ul>
                {userInfo.techs?.map((cards) =>(
                    <TechCard key={cards.id} id={cards.id} cards={cards} setTechInfo={setTechInfo} setEditTech={setEditTech}/>
                ))}
            </ul>

            </DashboardModules>
            
            

         </main>

      </Container>
    )
}