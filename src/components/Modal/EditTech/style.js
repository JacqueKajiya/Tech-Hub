import styled from "styled-components";

export const ModalEditButtons = styled.div`
    display: flex;
    gap: 15px;

    .saveButton{
        width: 70%;
    }

    .deleteButton{
        width: 30%;
        background-color: var(--grey-1);
    }

    .deleteButton:hover{
        background-color: var(--grey-2);
    }
`