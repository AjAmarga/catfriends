import React from 'react';

const Searchbox = ({searchfield, searchChange}) => {
	return (
		<div className ='tc pa2'>
		<input className = '' 
		type='search' placeholder = 'Search for Cats' 
		onChange = {searchChange}
		/>
		</div>
		);
}

export default Searchbox;