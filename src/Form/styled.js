import styled from "styled-components";

export const FormContainer = styled.form`
    display: flex;
    padding: 15px 0px;

    @media (max-width: 767px) {
        flex-direction: column;
    }
`;

export const Input = styled.input`
    padding: 10px;
    flex-grow: 1;
    margin-right: 15px;
    border-color: #ddd;
    border-style: solid;
    border-width: 1px;

    @media (max-width: 767px) {
        margin: 10px 0;
    }
`;

export const Button = styled.button`
    background-color: teal;
    color: whitesmoke;
    padding: 0 20px;
    transition: 0.3s;
    border: none;

    @media (max-width: 767px) {
        padding: 10px 0;
    }

    &:hover {
        background-color: hsl(180, 100%, 30%);
        transform: scale(1.1);
        cursor: pointer;

        @media (max-width: 767px) {
            transform: scale(1.04);
        }
    }

    &:active {
        background-color: hsl(180, 100%, 35%);
    }
`;