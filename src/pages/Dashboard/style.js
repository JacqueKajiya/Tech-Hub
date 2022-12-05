import styled from "styled-components";

export const DashBoardHeader = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;

    border-bottom: 1px solid var(--grey-2);
    padding: 10px 0 15px 0;

div{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.logOutButton{
    max-width: 80px;
    height: 31px;

    color: var(--grey-0);
    background-color: var(--grey-3);
}

.logOutButton:hover{
    background-color: var(--grey-2);
}

@media (min-width: 690px){
    div{
        width: 60%;
        margin: 0 auto;
    }
}
`

export const DashboardUserInfo = styled.section`
    width: 100%;
    border-bottom: 1px solid var(--grey-2);

    div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 3rem 0;
        gap: 1rem;
    }

    h2{
        font-size: var(--font-1);
    }

    p{
        font-size: var(--font-2);
    }

    @media (min-width: 690px){
    div{
        width: 60%;
        flex-direction: row;
        margin: 0 auto;
    }
}

`

export const DashboardModules = styled.section`
    display: none;
    flex-direction: column;
    line-height: 2.5rem;

    padding: 2rem 0;

    h4{
        font-size: var(--font-1);
    }

    p{
        color: var(--grey-0);
        font-size: var(--font-2);
    }

    @media(min-width: 400px){
        width: 100%;
        display: flex;
        margin: 0 auto;

    }

    @media(min-width: 690px){
        width: 60%;
    }
`