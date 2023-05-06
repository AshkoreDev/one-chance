import { useQuery } from '@tanstack/react-query';
import { getPets } from './../services/pets.service.js';
import PetCard from './petCard/PetCard.jsx';

function PetList() {

	const { data, isLoading, isError, error } = useQuery({
		queryKey: ['pets'],
		queryFn: getPets
	});

	return data.map((pet) => <PetCard key={pet.id} pet={pet}/>);

};

export default PetList;