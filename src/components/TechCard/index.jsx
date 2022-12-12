import { TechItem } from "./style"

export const TechCard = ({cards, setTechInfo, setEditTech}) => {
    return(
        <TechItem onClick={() => {
            setTechInfo(cards) 
            setEditTech(true)}}>

            <span>{cards.title}</span>
            <small>{cards.status}</small>

        </TechItem>
    )
}