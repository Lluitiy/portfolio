import styled from '@emotion/styled';

const ProjectItem = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	&:nth-of-type(2n) {
		flex-direction: row-reverse;
	}
`;

const ProjectHeading = styled.h3`
	font-weight: 600;
	font-size: 24px;
	line-height: 1.3;
	letter-spacing: 0.04em;
	text-decoration: underline 1px solid ${p => p.theme.colors.primary};
	filter: drop-shadow(2px 0px 10px #dd7df7);
`;

const MetaInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	gap: 24px;

	width: 600px;
`;

const MetaDescription = styled.p`
	font-weight: 400;
	font-size: 20px;
	letter-spacing: 0.04em;
	line-height: 1.3;
	color: ${p => p.theme.colors.text};
`;

const TechHeading = styled.h4`
	font-weight: 500;
	font-size: 24px;
	letter-spacing: 0.04em;
	line-height: 1.3;
	color: ${p => p.theme.colors.hover};
`;

const TechList = styled.ul`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const TechItem = styled.li`
	font-weight: 500;
	font-size: 20px;
	letter-spacing: 0.04em;
	line-height: 1.3;
	color: ${p => p.theme.colors.text};
	filter: drop-shadow(6px 6px 6px ${p => p.theme.colors.hoverShadow});
`;
export const styles = {
	ProjectItem,
	ProjectHeading,
	MetaInfo,
	MetaDescription,
	TechHeading,
	TechList,
	TechItem,
};
