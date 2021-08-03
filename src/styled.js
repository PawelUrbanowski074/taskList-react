import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "active";

export const Wrapper = styled.div`
	max-width: 900px;
	margin: 0 auto;
	padding: 20px;
`;

export const List = styled.ul`
	background-color: ${({ theme }) => theme.color.teal};
	list-style: none;
	margin: 0px;
	padding: 0px;
	display: flex;
	justify-content: center;
`;

export const Item = styled.li`
			font-size: 18px;
			padding: 20px;
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({
	activeClassName,
}))`
	color:  ${({ theme }) => theme.color.white}; 
	text-decoration: none;
	&.${activeClassName} {
			
			font-weight: bold;
	}
`;