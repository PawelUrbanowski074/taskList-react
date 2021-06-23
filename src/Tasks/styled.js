import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    padding-left: 0;
`;

export const Item = styled.li`
    font-size: 18px;
    padding: 10px;
    border-bottom: solid 1px #ddd;
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
    color: white;
    width: 30px;
    height: 30px;
    border: none;
    justify-self: center;
    transition: 0.3s;

    ${({ toggleDone}) => toggleDone && css`
        background-color: #090;

        &:hover {
            background-color: hsl(120, 100%, 40%);
            cursor: pointer;
        }

        &:active {
            background-color: hsl(120, 100%, 45%);
        }
    `}

    ${({ remove }) => remove && css`
        background-color: #f00;

        &:hover {
            background-color: hsl(0, 100%, 40%);
            cursor: pointer;
        }

        &:active {
            background-color: hsl(0, 100%, 35%);
        }
    `}
`;