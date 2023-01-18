import styled from '@emotion/styled';

export const HeaderComponent = styled.header`
	top: 0;
	left: 0;
	position: sticky;
	z-index: 1100;
	padding: 32px 0px;
	background-color: rgba(13, 17, 23, 0.9);
`;

export const HeaderWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	margin: 0px auto;
	padding: 0px 16px;
	width: 1280px;
`;
export const Hire = styled.a`
	font-weight: 500;
	font-size: 24px;
	color: ${p => p.theme.colors.text};
	transition: ${p => p.theme.transition.primary};

	:hover,
	:focus {
		color: ${p => p.theme.colors.primary};
	}
`;
