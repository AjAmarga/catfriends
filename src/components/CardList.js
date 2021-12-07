import React from 'react';
import Card from './card';
// import {cats} from './cats';

const CardList = ({cats}) => {

	return (
	<div className='tc'>
   		{cats.map((user, i) => [  
		<Card key = {i} 
		id={cats[i].id}
		name={cats[i].name} 
		imglink={cats[i].imglink} 
		email={cats[i].email} />
		])
   	}
    </div>
    );

}

export default CardList;