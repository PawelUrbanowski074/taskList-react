import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
    list-style: none;
    padding-left: 0;
`;

export const Item = styled.li`
    font-size: 18px;
    padding: 10px;
    border-bottom: solid 1px ${({ theme }) => theme.color.alto};;
    display: flex;
    align-items: center;
    word-break: break-word; 

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    padding: 0px 15px;
    flex-grow: 1;

    ${({ done }) => done && css`
        text-decoration: line-through;
    `}  
`;

export const Button = styled.button`
    color: ${({ theme }) => theme.color.white};
    width: 30px;
    height: 30px;
    border: none;
    justify-self: center;
    transition: 0.3s;

    ${({ toggleDone }) => toggleDone && css`
        background-color: ${({ theme }) => theme.color.forestGreen};
    `}

    ${({ remove }) => remove && css`
        background-color: ${({ theme }) => theme.color.crimson};
    `}

    &:hover {
        filter: brightness(110%);
        cursor: pointer;
    }

    &:active {
        filter: brightness(120%);
    }
`;

export const StyledLink = styled(Link)`
    color:  ${({ theme }) => theme.color.teal}; 
    text-decoration: none;

    &:hover {
        filter: brightness(110%);
        cursor: pointer;
    }

    &:active {
        filter: brightness(120%);
    }
`;