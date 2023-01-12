import { Meta } from './Meta/Meta';
import { Title } from './Title/Title';
import { Container, Section } from '../Shared/Shared.styled';

import { AboutWrapper } from './About.styled';

export const About = () => {
	return (
		<Section id="about">
			<Container>
				<AboutWrapper>
					<Title />
					<Meta />
				</AboutWrapper>
			</Container>
		</Section>
	);
};
