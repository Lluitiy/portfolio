import { Buttons } from '../Buttons/Buttons';

import { MetaStyles } from './Meta.styled';

export const Meta = () => {
	const { MetaWrapper, MetaText } = MetaStyles;
	return (
		<MetaWrapper>
			<MetaText>
				React is my blood, code is my love. Web development and application
				engineering are what bring me pleasure and enjoyment. If I take on a
				case you can be sure of an excellent result.
			</MetaText>
			<Buttons />
		</MetaWrapper>
	);
};
