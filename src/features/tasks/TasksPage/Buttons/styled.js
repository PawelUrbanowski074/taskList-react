import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;

  @media (max-width:${({ theme }) => theme.breakPoint.mobileMax}px) {
      grid-template-columns: 1fr;
  }
`;