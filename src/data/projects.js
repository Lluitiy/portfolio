import hoobankimg from '../assets/hoo-bank.png';
import petly from '../assets/petly.png';
import readingTracker from '../assets/reading-tracker.png';
import iceCream from '../assets/icecream.png';
import captur from '../assets/captur.png';
import dashboard from '../assets/dashboard.png';
import dalle from '../assets/dalle.png';

export const projects = [
	{
		name: 'Dalle Clone',
		picture: `${dalle}`,
		description:
			'An application created using artificial intelligence with the help of the OpenAI API. This allows the user an opportunity to create an image using a neural network and share it with other users who have previously created images that are stored in the database.',
		tech: ['React', 'OpenAI', 'MongoDB', 'Cloudinary', 'Git', 'Vite'],
		link: 'https://dall-eclone.netlify.app',
	},
	{
		name: 'Admin Panel',
		picture: `${dashboard}`,
		description:
			'Administrative panel, to keep track of the company to control the productivity of business processes through various charts, as well as to control the employees. The purpose of this application is to increase the efficiency of the company by clearly controlling what is happening.',
		tech: ['React', 'MUI', 'Nivo', 'Full Calendar', 'Git', 'Vite', 'Vercel'],
		link: 'https://devpavlo-dashboard.netlify.app/',
	},
	{
		name: 'Captur',
		picture: `${captur}`,
		description:
			'This application has been implemented using the Next.js framework in order to improve search engine optimisation, which will increase the website coverage and ultimately increase the number of views, which will consequently increase the conversion rate.',
		tech: ['Next.js', 'Tailwind', 'Git', 'Vercel'],
		link: 'https://captur-blue.vercel.app/',
	},
	{
		name: 'Hoo Bank',
		picture: `${hoobankimg}`,
		description:
			"Elegant and at the same time simple solution for businesses providing online payment services. The purpose of this application is to increase the number of the company's customers by involving them through the website, which is easy to use and understand.",
		tech: ['React', 'Vite', 'Tailwind', 'Git', 'Netlify'],
		link: 'https://hoo-bank-pet.netlify.app',
	},
	{
		name: 'Petly',
		picture: `${petly}`,
		description:
			'The project was carried out during an educational program in a team of group mates. The idea of this application is to create a social network for pet lovers with the ability to share information with other users about their pets, as well as information about lost pets. This site is also a great opportunity to both buy and sell pets.',
		tech: ['React', 'SCSS', 'MongoDB', 'Redux', 'Git', 'Netlify', 'Railway'],
		link: 'https://care-your-pets.netlify.app/',
	},
	{
		name: 'Reading-Tracker',
		picture: `${readingTracker}`,
		description:
			'This app was created in a team with my teammates, in which I was a team leader. The goal of this site is to keep track of the books read. As well as a convenient interface for adding goals and timelines for each of the desired books to read. After that, the number of pages read is conveniently displayed on an interactive graph. The application has the possibility of logging in with a Google account or after registration directly on the site.',
		tech: ['React', 'Emotion', 'Redux', 'Swagger', 'Git', 'Netlify'],
		link: 'https://team-slice.netlify.app/libary',
	},
	{
		name: 'Ice-Cream Landing',
		picture: `${iceCream}`,
		description:
			'Another group project was done under my supervision. This site has a fairly simple architecture and is designed without the use of frameworks, which positively affects the optimisation of search engines. The task was to create a landing page for the company which sells ice cream in a different format of work. This site is designed for business development by increasing customer conversion through scaling as well as for searching for partners willing to buy a franchise.',
		tech: ['HTML', 'SASS', 'JS', 'Git', 'Parcel'],
		link: 'https://lluitiy.github.io/IceCream-Landing/',
	},
];
