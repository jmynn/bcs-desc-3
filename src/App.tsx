import Container from './components/ui/Container';
import Honor from './components/views/Honor';
import Main from './components/views/Main';
import Team from './components/views/Team';

function App() {
	return (
		<>
			<Container>
				<Main />
				<Team />
			</Container>
			<Honor />
		</>
	);
}

export default App;
