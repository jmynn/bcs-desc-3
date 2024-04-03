import { motion } from 'framer-motion';
import { useContext } from 'react';
import Container from './components/ui/Container';
import ModalFeedback from './components/ui/ModalFeedback';
import Honor from './components/views/Honor';
import Main from './components/views/Main';
import Reviews from './components/views/Reviews';
import Services from './components/views/Services';
import Team from './components/views/Team';
import { ModalContext } from './providers/ModalProvider';

function App() {
	const { isVisible } = useContext(ModalContext);
	return (
		<>
			{isVisible && <ModalFeedback />}
			<Container>
				<Main />
				<motion.div
					animate={{ opacity: 1 }}
					initial={{ opacity: 0 }}
					transition={{ duration: 1, ease: 'easeInOut', delay: 1.6 }}>
					<Team />
				</motion.div>
			</Container>
			<motion.div
				animate={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				transition={{
					duration: 1,
					ease: 'easeInOut',
					delay: 1.6,
				}}>
				<Honor />
				<Container>
					<Services />
				</Container>
				<Reviews />
			</motion.div>
		</>
	);
}

export default App;
