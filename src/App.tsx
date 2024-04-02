import Container from './components/ui/Container';
import Honor from './components/views/Honor';
import Main from './components/views/Main';
import Services from './components/views/Services';
import Team from './components/views/Team';

function App() {
	return (
		<>
			<Container>
				<Main />
				<Team />
			</Container>
			<Honor />
			<Container>
				<Services />
			</Container>
		</>
	);
}

export default App;
