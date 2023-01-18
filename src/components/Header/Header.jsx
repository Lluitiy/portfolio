import { NavBar } from './NavBar/NavBar';
import { ReactComponent as WhatsAppIcon } from '../../assets/wa.svg';
import { ReactComponent as MailIcon } from '../../assets/mail.svg';

import {
	HeaderComponent,
	HeaderWrapper,
	Hire,
	Contacts,
} from './Header.styled';

export const Header = () => {
	return (
		<HeaderComponent>
			<HeaderWrapper>
				<NavBar />
				<Contacts>
					<Hire
						href="https://wa.me/380635777602"
						target="_blank"
						rel="noreferrer noopener"
					>
						<WhatsAppIcon width={16} height={16} fill="currentColor" />
						+380635777602
					</Hire>
					<Hire href="mailto: pavlovovzhynskyy@gmail.com">
						<MailIcon width={16} height={16} stroke="currentColor" />
						pavlovovzhynskyy@gmail.com
					</Hire>
				</Contacts>
			</HeaderWrapper>
		</HeaderComponent>
	);
};
