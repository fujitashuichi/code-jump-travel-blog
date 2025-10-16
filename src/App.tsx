import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';


function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<div className='contentWrapper'>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path='*' element={<NotFoundPage />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
