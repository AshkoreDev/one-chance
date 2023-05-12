import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAdopters } from './../services/adopters.service.js';
import Loader from './../../../components/loader/Loader.jsx';
import AdopterCard from './AdopterCard.jsx';
import { CardsList } from './../../styles/CardsList.style.js';

function AdopterList() {

	const [errorMessage, setErrorMessage] = useState('');

	const { data, isLoading, isError } = useQuery({
		queryKey: ['adopters'],
		queryFn: getAdopters,
		onError: (data) => setErrorMessage(data.response.data.message)
	});

	return (

		<CardsList>

			{(() => { 

				if(isLoading) {

					return <Loader title="Cargando"/>

				} else if(isError) {

					return <Loader title={errorMessage}/>

				} else {

					return data.map((adopter) => <AdopterCard key={adopter.petId} adopter={adopter}/>)	
				}

			})()}

		</CardsList>

	);
};

export default AdopterList;