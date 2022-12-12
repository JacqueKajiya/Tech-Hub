export const TechCard = ({cards, setTechInfo, setEditTech}) => {
    return(
        <li id={cards.id} onClick={() => {
            setTechInfo(cards) 
            setEditTech(true)}}>

            <span>{cards.title}</span>
            <small>{cards.status}</small>
        </li>
    )
}