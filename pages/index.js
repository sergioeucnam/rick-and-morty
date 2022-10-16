import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import {
	getCharacters,
	preLoadAllCharacters,
	totalEntries,
} from './components/features/slices/charactersSlice';
const LandingPage = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const characters = useSelector((state) => state.characters.characters);
	const total = useSelector((state) => state.characters.count);
	const loading = useSelector((state) => state.characters.fullLoaded);
	console.log(loading);
	console.log(total);
	const isLoaded = async () => {
		if (characters.length === 0) {
			dispatch(getCharacters(1));
			dispatch(totalEntries());
			dispatch(preLoadAllCharacters());
		}
	};

	useEffect(() => {
		isLoaded();
		if (total === characters.length) {
			console.log(total, 'if total');
			console.log(characters.length, 'if characters');
			console.log('todo cargado mi perrito malvado');
		}
	}, [characters.length]);
	return (
		<div className='bg-indigo-400 h-screen mx-auto flex w-full justify-center  items-center'>
			<div className='flex justify-center h-fit vsm:block vsm:px-8'>
				<span>
					<h1 className='text-5xl font-bold text-white'>Rick and Morty</h1>
					<p className='text-2xl text-white'>
						The best app for Rick and Morty fans
					</p>
				</span>
				<button
					onClick={() => router.push('/home')}
					className='mx-10 bg-indigo-200 text-black px-4 py-2 rounded-lg shadow-lg hover:bg-indigo-800 hover:text-white transition duration-300 ease-in-out '
				>
					<a>Enter</a>
				</button>
			</div>
		</div>
	);
};

export default LandingPage;
