import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;
  padding: 15px 0px;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
      grid-template-columns: 1fr;
      grid-gap: 0px;
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