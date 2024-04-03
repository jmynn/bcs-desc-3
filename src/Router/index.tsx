import { FunctionComponent, ReactNode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import Container from '../components/ui/Container';
import Footer from '../components/ui/Footer';
import Header from '../components/ui/Header';
import Wrapper from '../components/ui/Wrapper';
import Empty from '../components/views/Empty';

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
							path='*'
							element={<Empty />}
						/>
					</Routes>
				</div>
				<Container>
					<Footer />
				</Container>
			</Wrapper>
		</BrowserRouter>
	);
};

export default Router;
