import styled from '@emotion/styled';

import { ReactComponent as LinkedIn } from '../../assets/linkedin.svg';
import { ReactComponent as GitHub } from '../../assets/github.svg';
import { ReactComponent as UpWork } from '../../assets/upwork.svg';
import { ReactComponent as Codewars } from '../../assets/codewars.svg';

const Links = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 32px;
`;
const Link = styled.li`
	transition: ${p => p.theme.transition.primary};
	&:hover,
	&:focus {
		transform: scale(1.1);
		filter: drop-shadow(0px 4px 30px ${p => p.theme.colors.accent});
	}
`;
const LinkedInIcon = styled(LinkedIn)`
	width: 88px;
	height: 88px;
`;
const GitHubIcon = styled(GitHub)`
	fill: ${p => p.theme.colors.primary};

	width: 88px;
	height: 88px;
`;
const UpWorkIcon = styled(UpWork)`
	fill: ${p => p.theme.colors.darkText};

	width: 88px;
	height: 88px;
`;
const CodewarsIcon = styled(Codewars)`
	width: 88px;
	height: 88px;
`;

export const styles = {
	Links,
	Link,
	LinkedInIcon,
	GitHubIcon,
	UpWorkIcon,
	CodewarsIcon,
};
