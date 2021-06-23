import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Button = styled.button`
    background-color: white;
    color: teal;
    border-style: none;
    padding: 15px 15px;
    transition: 0.3s;

    &:hover:not([disabled]) {
        color: hsl(180, 100%, 35%);
        cursor: pointer;
    }

    &:active:not([disabled]) {
        color: hsl(180, 100%, 40%);
    }

    &:disabled {
        color: #bbb;
        cursor: not-allowed;
    }
`;