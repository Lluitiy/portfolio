import { nanoid } from 'nanoid';

import { Button } from '../../Shared/Shared.styled';

import { styles } from './ProjectsItem.styled';

export const ProjectsItem = ({ data }) => {
	const {
		ProjectItem,
		ProjectHeading,
		MetaInfo,
		MetaDescription,
		TechHeading,
		TechList,
		TechItem,
	} = styles;

	const { name, picture, description, tech, link } = data;
	return (
		<ProjectItem data-aos="zoom-in">
			<MetaInfo>
				<ProjectHeading>{name}</ProjectHeading>
				<MetaDescription>{description}</MetaDescription>
				<TechHeading>Technology Stack</TechHeading>
				<TechList>
					{tech.map(tool => (
						<TechItem key={nanoid()}>
							<p>{tool}</p>
						</TechItem>
					))}
				</TechList>
				<Button href={link} target="_blank" rel="noopener noreferrer">
					learn more
				</Button>
			</MetaInfo>
			<div>
				<img src={picture} alt={`${name} image`} width={600} height={330} />
			</div>
		</ProjectItem>
	);
};
