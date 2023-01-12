import { Logo } from '../../Logo/Logo';
import { links } from '../../../data/links';

import { StyledNavBar } from './NavBar.sttyled';

export const NavBar = () => {
	const { NavBar, NavList, NavItem, NavLink } = StyledNavBar;

	return (
		<NavBar>
			<Logo />
			<NavList>
				{links.map(category => (
					<NavItem key={category}>
						<NavLink href={`#${category}`}>{category}</NavLink>
					</NavItem>
				))}
			</NavList>
		</NavBar>
	);
};
