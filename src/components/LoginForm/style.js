import styled from "styled-components";

export const FormContainer = styled.div`
    width: 100%;
    max-width: 300px;
    background-color: var(--grey-3);

    display: flex;
    flex-direction: column;

    gap: 35px;
    padding: 35px;
    border-radius: var(--radius-2);

    h1{
        font-size: var(--font-1);
        align-self: center;
        margin-top: 10px;
    }

    .registerLoginSection{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }

    .buttonPink{
        background-color: var(--color-primary);
    }

    .buttonPink:hover{
        background-color: var(--color-primary-focus);
    }

    .buttonGrey{
        background-color: var(--grey-1);
    }
    .buttonGrey:hover{
        background-color: var(--grey-2);
    }

`