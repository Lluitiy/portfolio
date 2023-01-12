import styled from '@emotion/styled';

const NavBar = styled.nav`
	display: flex;
	justify-content: center;
	align-items: baseline;
	gap: 32px;
`;
const NavList = styled.ul`
	display: flex;
	justify-content: center;
	align-items: baseline;
	gap: 16px;
`;
const NavItem = styled.li``;

const NavLink = styled.a`
	font-weight: 500;
	font-size: 24px;
	text-transform: capitalize;
	color: ${p => p.theme.colors.text};
	transition: ${p => p.theme.transition.primary};

	:hover,
	:focus {
		color: ${p => p.theme.colors.primary};
	}
`;
export const StyledNavBar = {
	NavBar,
	NavList,
	NavItem,
	NavLink,
};
