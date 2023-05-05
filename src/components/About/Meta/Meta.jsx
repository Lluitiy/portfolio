import { Buttons } from '../Buttons/Buttons';

import { MetaStyles } from './Meta.styled';

export const Meta = () => {
	const { MetaWrapper, MetaText } = MetaStyles;
	return (
		<MetaWrapper>
			<MetaText>
				As a Full Stack Developer, I bring a broad range of technical skills to
				the table, including expertise in both front-end and back-end
				development. My experience spans across various programming languages,
				frameworks, and technologies, including React, Next.js, Node.js, and
				MongoDB. With a deep passion for delivering clean and efficient code, I
				always strive to create robust, scalable, and user-friendly applications
				that meet the needs of both clients and end-users.
			</MetaText>
			<Buttons />
		</MetaWrapper>
	);
};
