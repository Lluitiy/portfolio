import { Container } from '../Shared/Shared.styled';
import { styles } from './Footer.module';

export const Footer = () => {
	const { Footer,FooterText } = styles;
	return (
		<Footer>
			<Container>
				<FooterText>All rights reserved &#169;</FooterText>
			</Container>
		</Footer>
	);
};
