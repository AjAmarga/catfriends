import React from 'react';
import CardList from './CardList';
import { cats } from './cats';

const catApp = () => {
	return (
		<CardList cats = {cats}/>
	);
}

export default catApp;
