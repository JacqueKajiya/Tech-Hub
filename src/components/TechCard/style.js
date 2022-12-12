import styled from "styled-components";

export const TechItem = styled.li`
    width: 100%;
    height: 48px;

    font-size: var(--font-2);
    font-weight: 600;
    color: var(--grey-0);

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0.5rem;
    border-radius: var(--radius-2);

    background-color: var(--grey-4);

    transition: 0.2s ease;
    cursor: pointer;

    :hover{
        background-color: var(--grey-2);
    }
`