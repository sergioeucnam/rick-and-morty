import React from 'react';

const Card = ({ name, image }) => {
	return (
		<div>
			<div className='bg-slate-200'>
				<header className='text-center'>
					<h1>{name}</h1>
				</header>
				<main>
					<img src={image} alt={name} />
					<p>See details</p>
				</main>
			</div>
		</div>
	);
};

export default Card;
