import styled from "styled-components";

export default styled.button`
    background-color: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.teal};
    border-style: none;
    padding: 15px 15px;
    transition: 0.3s;

    &:hover:not([disabled]) {
        filter: brightness(110%);
        cursor: pointer;
    }

    &:active:not([disabled]) {
        filter: brightness(120%);
    }

    &:disabled {
        color: ${({ theme }) => theme.color.silver};
        cursor: not-allowed;
    }
`;