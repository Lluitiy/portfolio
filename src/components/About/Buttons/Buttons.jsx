import { Button } from '../../Shared/Shared.styled';
import { ButtonsStyles } from './Buttons.styled';

export const Buttons = () => {
	const { ButtonsWrapper } = ButtonsStyles;
	return (
		<ButtonsWrapper>
			<Button href="#projects">projects</Button>
			<Button href="#hire">contact me</Button>
		</ButtonsWrapper>
	);
};
