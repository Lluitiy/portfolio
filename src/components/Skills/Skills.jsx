import { nanoid } from 'nanoid';
import { skills } from '../../data/skills';

import { Container, Section } from '../Shared/Shared.styled';

import { styles } from './Skills.module';

export const Skills = () => {
	const { Title, SecondaryTitle, TechList, TechItem, TechText, ApproveIcon } =
		styles;

	return (
		<Section id="skills">
			<Container>
				<Title>Skills & Technologies</Title>
				<SecondaryTitle>
					That's the list of primary technologies I use to create my
					masterpieces. Many more to go out of that list.
				</SecondaryTitle>
				<TechList>
					{skills.map(skill => (
						<TechItem key={nanoid()}>
							<ApproveIcon />
							<TechText>{skill}</TechText>
						</TechItem>
					))}
				</TechList>
			</Container>
		</Section>
	);
};
