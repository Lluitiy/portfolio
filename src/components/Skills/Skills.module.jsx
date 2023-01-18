import styled from '@emotion/styled';
import { ReactComponent as Approve } from '../../assets/check-mark.svg';

const Title = styled.h2`
	font-weight: 500;
	text-align: center;
	font-size: 24px;
	letter-spacing: 0.04em;
	line-height: 1.3;
	margin-bottom: 24px;

	color: ${p => p.theme.colors.text};
	filter: drop-shadow(2px 2px 20px ${p => p.theme.colors.primary});
`;

const SecondaryTitle = styled.h3`
	font-weight: 400;
	width: 43%;
	margin: 0px auto;
	padding-bottom: 12px;
	margin-bottom: 24px;
	border-bottom: 2px solid ${p => p.theme.colors.hover};
	font-size: 20px;
	letter-spacing: 0.04em;
	line-height: 1.3;
`;
const ApproveIcon = styled(Approve)`
	stroke: ${p => p.theme.colors.primary};
	width: 18px;
	height: 18px;
`;

const TechList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 32px;
`;

const TechItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 394px;
	padding: 16px;
	gap: 16px;
	border-radius: 20px;
	border: 1px solid ${p => p.theme.colors.hoverShadow};
	background-color: ${p => p.theme.colors.backgroundDefault};
	box-shadow: rgba(206, 215, 224, 0.25) 0px 4px 5px,
		rgba(206, 215, 224, 0.12) 0px -2px 3px,
		rgba(206, 215, 224, 0.12) 0px 4px 6px,
		rgba(206, 215, 224, 0.17) 0px 2px 13px,
		rgba(206, 215, 224, 0.09) 0px -3px 5px;
`;

const TechText = styled.p`
	font-weight: 400;
	font-size: 16px;
	letter-spacing: 0.04em;
	line-height: 1.3;
	color: ${p => p.theme.colors.text};
`;
export const styles = {
	Title,
	SecondaryTitle,
	TechList,
	TechItem,
	TechText,
	ApproveIcon,
};
