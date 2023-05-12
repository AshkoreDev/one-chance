import { FaPen, FaTrash } from "react-icons/fa";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteAdopter } from './../services/adopters.service.js';
import { Card } from './../../styles/Card.style.js';

import userDefault from './../../../assets/user-default.svg';

function AdopterCard({ adopter }) {
	
	const { adopterId, firstName, lastName, documentType, documentNumber } = adopter;

	const queryClient = useQueryClient();

	const deleteAdopterFn = useMutation({
		mutationFn: deleteAdopter,
		onSuccess: () => { 
			console.log('Eliminado');
			queryClient.invalidateQueries('adopters');
		},
		onError: (data) => {
			console.log(data)
		}
	});

	const handleDelete = () => {
		deleteAdopterFn.mutate(adopterId);
	};

	return (

		<Card>
			<img src={userDefault} alt={`${firstName} ${lastName} profile photo`} width="140" height="140"/>
			<div>
				<p>{`${firstName} ${lastName}`}</p>
				<p>{`${documentType} ${documentNumber}`}</p>
				<div>
					<button title="Editar"><FaPen/></button>
				  <button title="Eliminar" onClick={handleDelete}><FaTrash/></button>
				</div>
			</div>
		</Card>

	);
};

export default AdopterCard;