import { NavBar } from './NavBar/NavBar';

import { HeaderComponent, HeaderWrapper, Hire } from './Header.styled';

export const Header = () => {
	return (
		<HeaderComponent>
			<HeaderWrapper>
				<NavBar />
				<Hire href="#hire">Hire Me</Hire>
			</HeaderWrapper>
		</HeaderComponent>
	);
};
