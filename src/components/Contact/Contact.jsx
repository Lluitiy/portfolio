import React from 'react';
import { Container, Section } from '../Shared/Shared.styled';
import { styles } from './Contact.module';

export const Contact = () => {
	const { Links, Link, LinkedInIcon, GitHubIcon, CodewarsIcon } = styles;

	return (
		<Section id="socials">
			<Container>
				<Links>
					<Link>
						<a
							href="https://www.linkedin.com/in/pavlo-vovzhynskyy-3477601bb/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<LinkedInIcon />
						</a>
					</Link>
					<Link>
						<a
							href="https://github.com/devpavlo"
							target="_blank"
							rel="noreferrer noopener"
						>
							<GitHubIcon />
						</a>
					</Link>
					{/* <Link>
						<a
							href="https://www.upwork.com/freelancers/~01afca39d0e811cd39"
							target="_blank"
							rel="noreferrer noopener"
						>
							<UpWorkIcon />
						</a>
					</Link> */}
					<Link>
						<a
							href="https://www.codewars.com/users/Lluitiy/stats"
							target="_blank"
							rel="noreferrer noopener"
						>
							<CodewarsIcon />
						</a>
					</Link>
				</Links>
			</Container>
		</Section>
	);
};
