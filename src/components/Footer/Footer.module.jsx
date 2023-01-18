import styled from '@emotion/styled';

const Footer = styled.footer`
	padding: 8px 0px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${p => p.theme.colors.backgroundDefault};
	border-top: 0.5px solid rgba(69, 255, 190, 0.5);
`;
const FooterText = styled.p`
	font-weight: 300;
	font-size: 12px;
	letter-spacing: 0.04em;
	line-height: 1.3;
	text-align: center;
`;
export const styles = {
	Footer,
	FooterText,
};
