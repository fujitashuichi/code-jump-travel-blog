import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import HomePageMain from './components/HomePageMain';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';


function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<div className='contentWrapper'>
					<Routes>
						<Route path="/" element={<HomePage />}>
							<Route path='/' element={<HomePageMain />} />
						</Route>
						<Route path='/article/:id' element={<ArticlePage />} />
						<Route path='*' element={<NotFoundPage />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
