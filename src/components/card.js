import React from 'react';

const Card = ({name, email, imglink}) => {
	return (
<div className = 'tc bg-yellow dib br4 pa2 ma1 grow'>
	<img alt='cats' src={imglink} width = '250px' height = '350px' />
	<div>
	<h2> {name} </h2>
	<p>{email}</p>
	</div>
</div>

	);

}
export default Card;