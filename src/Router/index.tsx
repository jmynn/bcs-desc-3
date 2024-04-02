import { FunctionComponent, ReactNode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import Header from '../components/ui/Header';
import Jobs from '../components/views/Jobs';
import Wrapper from '../components/ui/Wrapper';
import Container from '../components/ui/Container';

const Router: FunctionComponent = (): ReactNode => {
	return (
		<BrowserRouter>
			<Wrapper>
				<Container>
					<Header />
				</Container>
				<div id='content'>
					<Routes>
						<Route
							path='/'
							element={<App />}
						/>
						<Route
							path='/jobs'
							element={<Jobs />}
						/>
					</Routes>
				</div>
			</Wrapper>
		</BrowserRouter>
	);
};

export default Router;
