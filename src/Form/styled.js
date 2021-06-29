import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    padding: 15px 0px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
        flex-direction: column;
    }
`;

export const Input = styled.input`
    padding: 10px;
    flex-grow: 1;
    margin-right: 15px;
    border: 1px solid ${({ theme }) => theme.color.alto};

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
        margin: 10px 0;
    }
`;

export const Button = styled.button`
    background-color: ${({ theme }) => theme.color.teal};
    color: ${({ theme }) => theme.color.white};
    padding: 0 20px;
    transition: 0.3s;
    border: none;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
        padding: 10px 0;
    }

    &:hover {
        filter: brightness(110%);
        transform: scale(1.1);
        cursor: pointer;

        @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
            transform: scale(1.04);
        }
    }

    &:active {
        filter: brightness(120%);
    }
`;