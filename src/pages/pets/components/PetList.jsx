import { useQuery } from '@tanstack/react-query';
import { getPets } from './../services/pets.service.js';
import Loader from './../../../components/loader/Loader.jsx';
import PetCard from './PetCard.jsx';
import { PetSection } from './../styles/Pets.style.js';

function PetList() {

	const { data, isLoading, isError } = useQuery({
		queryKey: ['pets'],
		queryFn: getPets
	});

	console.log(data)
	return (

		<PetSection>

			{(() => { 

				if(isLoading) {

					return <Loader title="Cargando"/>

				} else if(isError) {

					return <Loader title="Error en la base de datos"/>

				} else {

					return data.map((pet) => <PetCard key={pet.petId} pet={pet}/>)	
				}

			})()}

		</PetSection>
	);
};

export default PetList;