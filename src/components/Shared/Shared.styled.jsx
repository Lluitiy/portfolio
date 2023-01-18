import styled from '@emotion/styled';

export const Section = styled.div`
	padding: 48px 0px;

	background: #0d1117;

	:nth-of-type(2n) {
		background: linear-gradient(
			45deg,
			rgb(15, 56, 79, 1) 5%,
			rgb(13, 17, 23, 1) 38%
		);
	}
	:nth-of-type(2n-1) {
		background: linear-gradient(
			45deg,
			rgb(13, 17, 23, 1) 15%,
			rgb(15, 56, 79, 1) 78%
		);
	}
`;

export const Container = styled.div`
	width: 1280px;

	margin: 0px auto;
	padding: 0px 16px;
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
