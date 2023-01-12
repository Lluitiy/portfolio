import { Header } from './components/Header/Header';
import { About } from './components/About/About';
import { Projects } from './components/Projects/Projects';
import { Skills } from './components/Skills/Skills';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

export const App = () => {
	return (
		<>
			<Header />
			<main>
				<About />
				<Projects />
				<Skills />
				<Contact />
				<footer>
					<Footer />
				</footer>
			</main>
		</>
	);
};
