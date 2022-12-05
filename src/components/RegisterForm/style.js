import styled from "styled-components";


export const RegisterHeader = styled.header`
    width: 100%;
    max-width: 350px;
    
    display: flex;
    justify-content: space-between;

    padding: 15px;

    .backToLoginButton{
        max-width: 80px;
        height: 31px;

        color: var(--grey-0);
        background-color: var(--grey-3);
    }

    .backToLoginButton:hover{
        background-color: var(--grey-2);
    }

`

export const FormContainer = styled.div`
    width: 100%;
    max-width: 300px;
    background-color: var(--grey-3);

    display: flex;
    flex-direction: column;

    gap: 35px;
    padding: 35px;
    border-radius: var(--radius-2);

    .buttonPink{
        background-color: var(--color-primary);
    }

    .buttonPink:hover{
        background-color: var(--color-primary-focus);
    }

`