import { FaPen, FaTrash } from "react-icons/fa";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deletePet } from './../services/pets.service.js';
import { Card } from './../../styles/Card.style.js';

import petDefault from './../../../assets/pet-default.svg';

function PetCard({ pet }) {

	const { petId, image, name, petAdoptionStatus } = pet;

	const queryClient = useQueryClient();

	const deletePetFn = useMutation({
		mutationFn: deletePet,
		onSuccess: () => { 
			console.log('Eliminado');
			queryClient.invalidateQueries('pets');
		}
	});

	const handleDelete = () => {
		deletePetFn.mutate(petId);
	};

	return (

		<Card>
			<img src={petDefault} alt={`${name} profile photo`} width="140" height="140"/>
			<div>
				<p>{name}</p>
				<p>{petAdoptionStatus.title}</p>
				<div>
					<button title="Editar"><FaPen/></button>
				  <button title="Eliminar" onClick={handleDelete}><FaTrash/></button>
				</div>
			</div>
		</Card>

	);
};

export default PetCard;