import { useQuery } from '@tanstack/react-query';
import { getPets } from './../services/pets.service.js';
import PetCard from './PetCard.jsx';
import { PetSection } from './../styles/Pets-style.js';

function PetList() {

	const { data, isLoading, isError } = useQuery({
		queryKey: ['pets'],
		queryFn: getPets
	});
	
	return (

		<PetSection>

			{(() => { 

				if(isLoading) {

					return <h2>Cargando...</h2>;

				} else if(isError) {

					return <h2>ERROR EN LA BASE DE DATOS.</h2>;

				} else {

					return data.map((pet) => <PetCard key={pet.petId} pet={pet}/>)	
				}

			})()}

		</PetSection>
	);
};

export default PetList;