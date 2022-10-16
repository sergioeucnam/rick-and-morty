import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './components/Card';
import Navbar from './components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from './components/features/slices/charactersSlice';
import Pagination from './components/Pagination';
const home = () => {
	const dispatch = useDispatch();
	const characters = useSelector((state) => state.characters.characters);
	console.log(characters.length, 'personajes appa');
	const [currentPage, setCurrentPage] = useState(1);
	const [currentByPage] = useState(10);
	// const totalPages = Math.ceil(pokemon?.length / currentByPage);

	console.log(characters);
	useEffect(() => {
		if (characters?.length === 0) {
			dispatch(getCharacters(1));
		}
	}, []);

	return (
		<div className='bg-lime-800 grid w-full h-fit'>
			<Navbar />
			<div className='w-2/3 grid grid-cols-4 gap-5 mx-auto pt-20 pb-10 '>
				{characters?.results?.map(({ name, image }) => {
					return <Card key={name} name={name} image={image} />;
				})}
			</div>
			<Pagination
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				// totalPages={}
			/>
		</div>
	);
};

export default home;
