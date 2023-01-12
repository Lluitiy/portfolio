import styled from '@emotion/styled';

export const Logotype = styled.a`
	font-weight: 700;
	font-size: 24px;
	padding-right: 16px;
    color: ${p => p.theme.colors.text};
	border-right: 1px solid ${p => p.theme.colors.text};
`;

export const Accent = styled.span`
    color: ${p => p.theme.colors.primary};
`
