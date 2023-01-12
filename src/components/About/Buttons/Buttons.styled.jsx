import styled from '@emotion/styled';

export const ButtonsWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 48px;
`;
export const Button = styled.a`
	width: 200px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 400;
	font-size: 14px;
	letter-spacing: 0.04em;

	padding: 16px 32px;
	border-radius: 20px;

	color: ${p => p.theme.colors.darkText};
	background-color: ${p => p.theme.colors.primary};
	transition: ${p => p.theme.transition.primary};

	:hover,
	:focus {
		color: ${p => p.theme.colors.primary};
		background-color: ${p => p.theme.colors.backgroundDefault};
		filter: drop-shadow(0 0 2em ${p => p.theme.colors.hoverShadow});
	}
`;

export const ButtonsStyles = {
	ButtonsWrapper,
	Button,
};
