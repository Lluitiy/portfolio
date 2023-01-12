import styled from '@emotion/styled';

export const MetaWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 64px;
`;
export const MetaText = styled.p`
	display: block;
	width: 500px;
	font-weight: 400;
	font-size: 24px;
	line-height: 1.3;
	letter-spacing: 0.04em;
	color: ${p => p.theme.colors.text};
`;

export const MetaStyles = {
	MetaWrapper,
	MetaText,
};
