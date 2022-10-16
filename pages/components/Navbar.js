import React from 'react';
import { useRouter } from 'next/router';
import Searchbar from './Searchbar';

const Navbar = () => {
	const router = useRouter();
	return (
		<nav className='flex fixed w-full bg-white h-[10vh] p-3 justify-around'>
			<div className='w-1/5 flex-row justify-center'>
				<ul className='flex justify-center '>
					<li>
						<button
							className='mx-10 bg-indigo-200 text-black px-4 py-2 rounded-lg shadow-lg hover:bg-indigo-800 hover:text-white transition duration-300 ease-in-out'
							onClick={() => router.push('/')}
						>
							<a>Home</a>
						</button>
					</li>
				</ul>
			</div>
			<div className='w-3/5'>
				<Searchbar />
			</div>
			<div className='w-1/5 flex-row justify-between'>
				<ul className='flex justify-center'>
					<li>
						<button
							className='mx-10 bg-indigo-200 text-black px-4 py-2 rounded-lg shadow-lg hover:bg-indigo-800 hover:text-white transition duration-300 ease-in-out'
							onClick={() => router.push('/about')}
						>
							<a>About</a>
						</button>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
