import { nanoid } from 'nanoid';
import { projects } from '../../data/projects';

import { Container, Section } from '../Shared/Shared.styled';
import { ProjectsItem } from './ProjectsItem/ProjectsItem';

import { styles } from './Projects.styled';

export const Projects = () => {
	const { ProjectList } = styles;

	return (
		<Section id="projects">
			<Container>
				<ProjectList>
					{projects.map(data => (
						<ProjectsItem data={data} key={nanoid()} />
					))}
				</ProjectList>
			</Container>
		</Section>
	);
};
