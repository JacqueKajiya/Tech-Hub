import styled from "styled-components";

export const ModalWrapper = styled.div`
    inset: 0;
    width: 100%;
    min-height: 100vh;

    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(0, 0, 0, 0.5);
    z-index: 99;
`

export const ModalBox = styled.div`
    padding: 40px;
    width: 100%;
    max-width: 350px;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media(min-width: 555px){
        max-width: 450px;
        height: 342px;
    }
`


export const ModalHeader = styled.div`
    width: 100%;

    background-color: var(--grey-2);

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem;
    border-radius: 4px 4px 0 0;

    font-size: var(--font-3);
   
    button{
        background-color: var(--grey-2);
        color: var(--grey-1);

        border: none;
    }

`

export const ModalForm = styled.form`
    width: 100%;
    height: 275px;
    color: var(--grey-0);
    background-color: var(--grey-3);

    display: flex;
    flex-direction: column;
    gap: 22px;
    padding: 1rem;

    border-radius: 0 0 4px 4px;

    label{
        width: 100%;
        font-size: var(--font-3);
    }

    input, select{
        width: 100%;
        height: 38px;
        background-color: var(--grey-2);
        padding: 8px;
        color: var(--grey-0);

        border-radius: var(--radius-2);
        border: 1px solid #F8F9FA;
    }

    button{
        width: 100%;
        height: 38px;

        border-radius: var(--radius-2);
        border: none;
        margin-top: 10px;

        background-color: var(--color-primary);
        color: var(--grey-0);
    }

    button:hover{
        background-color: var(--color-primary-focus);
    }
`
