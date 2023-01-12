import styled from '@emotion/styled';

export const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	gap: 16px;
	/* width: 50%; */
`;
export const Heading = styled.h1`
	font-weight: 800;
	font-size: 30px;
	letter-spacing: 0.04em;
`;
export const HeadingText = styled.h2`
	font-weight: 500;
	font-size: 22px;
	letter-spacing: 0.04em;
`;
export const Accent = styled.span`
	color: ${p => p.theme.colors.primary};
`;
export const TitleStyles = {
	TextWrapper,
	Heading,
	HeadingText,
	Accent,
};
