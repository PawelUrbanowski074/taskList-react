import styled from "styled-components";

export default styled.input`
    padding: 10px;
    flex-grow: 1;
    border: 1px solid ${({ theme }) => theme.color.alto};

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
        margin: 10px 0;
    }
`;
