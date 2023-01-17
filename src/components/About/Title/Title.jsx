import { TitleStyles } from './Title.styled';

export const Title = () => {
	const { TextWrapper, Heading, HeadingText, Accent } = TitleStyles;
	return (
		<TextWrapper>
			<Heading>
				<Accent>Hi</Accent>, my name is Pavlo
			</Heading>
			<HeadingText>
				I am a Full Stack <Accent>Developer</Accent>
			</HeadingText>
		</TextWrapper>
	);
};
