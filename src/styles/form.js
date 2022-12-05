import styled from "styled-components";

export const StyledForm= styled.form`
    width: 100%;
    color: var(--grey-0);

    display: flex;
    flex-direction: column;
    gap: 10px;

    label{
        font-size: var(--font-3);
    }

    input, select{
        width: 100%;
        max-width: 265px;
        height: 38px;
        background-color: var(--grey-2);
        padding: 8px;
        color: var(--grey-0);

        border-radius: var(--radius-2);
        border: 1px solid #F8F9FA;
    }

`