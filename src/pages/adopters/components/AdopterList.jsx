import { useQuery } from '@tanstack/react-query';
import { getAdopters } from './../services/adopters.service.js';
import Loader from './../../../components/loader/Loader.jsx';
import AdopterCard from './AdopterCard.jsx';
import { CardsList } from './../../styles/CardsList.style.js';

function AdopterList() {

	const { data, isLoading, isError } = useQuery({
		queryKey: ['adopters'],
		queryFn: getAdopters
	});

	return (

		<CardsList>

			{(() => { 

				if(isLoading) {

					return <Loader title="Cargando"/>

				} else if(isError) {

					return <Loader title="Error en la base de datos"/>

				} else {

					return data.map((adopter) => <AdopterCard key={adopter.petId} adopter={adopter}/>)	
				}

			})()}

		</CardsList>

	);
};

export default AdopterList;