import styled from '@emotion/styled';

export const Section = styled.div`
	padding: 48px 0px;
	min-height: 420px;
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
