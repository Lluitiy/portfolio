import { NavBar } from './NavBar/NavBar';

import { HeaderComponent, HeaderWrapper } from './Header.styled';

export const Header = () => {
	return (
		<HeaderComponent>
			<HeaderWrapper>
				<NavBar />
			</HeaderWrapper>
		</HeaderComponent>
	);
};
