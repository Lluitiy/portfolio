import hoobankimg from '../assets/hoo-bank.png';
import petly from '../assets/petly.png';
import readingTracker from '../assets/reading-tracker.png';
import movieFinder from '../assets/movies.png';
import phoneBook from '../assets/phone-book.png';
import iceCream from '../assets/icecream.png';
import webStudio from '../assets/web-studio.png';
import captur from '../assets/captur.png';
import dashboard from '../assets/dashboard.png';
import dalle from '../assets/dalle.png';

export const projects = [
	{
		name: 'Dalle Clone',
		picture: `${dalle}`,
		description:
			'An application created using OpenAI`s artificial intelligence API to generate images from a string and the ability to download and share the resulting image ',
		tech: ['React', 'OpenAI', 'MongoDB', 'Cloudinary', 'Git', 'Vite'],
		link: 'https://dall-eclone.netlify.app',
	},
	{
		name: 'Admin Panel',
		picture: `${dashboard}`,
		description:
			'A comprehensive web application for the administration of your entire company with the ability to connect API queries to a remote server to create charts for the needs of your business, as well as add employees, upload data and authorization.',
		tech: ['React', 'MUI', 'Nivo', 'Full Calendar', 'Git', 'Vite', 'Vercel'],
		link: 'https://devpavlo-dashboard.netlify.app/',
	},
	{
		name: 'Captur',
		picture: `${captur}`,
		description:
			'Stylish minimalistic web site as a blog/landing for a travel photographer. The simplicity of the site and the depth of the photos complement each other perfectly, making the use of the page user friendly. ',
		tech: ['Next.js', 'Tailwind', 'Git', 'Vercel'],
		link: 'https://captur-blue.vercel.app/',
	},
	{
		name: 'Hoo Bank',
		picture: `${hoobankimg}`,
		description:
			'Modern banking app made with React and Tailwind. Modern design with responsive layout so that the user with any device can fully enjoy using the application.',
		tech: ['React', 'Vite', 'Tailwind', 'Git', 'Netlify'],
		link: 'https://hoo-bank-pet.netlify.app',
	},
	{
		name: 'Petly',
		picture: `${petly}`,
		description:
			'A full-fledged full-stack application created like a social network where the user can register and exhibit their animals as in their profile and for sale. There is also a category listing board for buying, finding, and gifting pets  ',
		tech: ['React', 'SCSS', 'MongoDB', 'Redux', 'Git', 'Netlify', 'Railway'],
		link: 'https://care-your-pets.netlify.app/',
	},
	{
		name: 'Reading-Tracker',
		picture: `${readingTracker}`,
		description:
			'Application designed for those who love to read. Functionality allows you to keep track of the number of books and pages read, as well as set goals and see the result on a dynamic graph',
		tech: ['React', 'Emotion', 'Redux', 'Swagger', 'Git', 'Netlify'],
		link: 'https://team-slice.netlify.app/libary',
	},
	{
		name: 'Movie Finder',
		picture: `${movieFinder}`,
		description:
			'A simple application that displays information about popular movies from the past week, as well as the ability to search for movies by title and explore information about the cast and reviews of it ',
		tech: ['React', 'Emotion', 'themoviedb', 'Git'],
		link: 'https://lluitiy.github.io/goit-react-hw-05-movies/',
	},
	{
		name: 'Phone Book',
		picture: `${phoneBook}`,
		description:
			'Web application designed to store a list of contacts, as well as their changes by sending requests to a remote database',
		tech: ['React', 'Emotion', 'Redux', 'Swagger', 'Git'],
		link: 'https://lluitiy.github.io/PhoneBook/',
	},
	{
		name: 'Ice-Cream Landing',
		picture: `${iceCream}`,
		description:
			'Web site made on native HTML and SASS as a landing page for the ice cream shop chain,',
		tech: ['HTML', 'SASS', 'JS', 'Git', 'Parcel'],
		link: 'https://lluitiy.github.io/IceCream-Landing/',
	},
	{
		name: 'WebStudio Landing',
		picture: `${webStudio}`,
		description:
			'Web site made with native HTML and SASS as a business card of web studio ',
		tech: ['HTML', 'SASS', 'Parcel', 'Git'],
		link: 'https://lluitiy.github.io/WebStudio-landing/',
	},
];
