import { FaPen, FaTrash } from "react-icons/fa";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteUser } from './../services/users.service.js';
import { Card } from './../../styles/Card.style.js';

import userDefault from './../../../assets/user-default.svg';

function PetCard({ user }) {
	console.log(user)
	const { userId, username, userRole } = user;

	const queryClient = useQueryClient();

	const deleteUserFn = useMutation({
		mutationFn: deleteUser,
		onSuccess: () => { 
			console.log('Eliminado');
			queryClient.invalidateQueries('users');
		}
	});

	const handleDelete = () => deleteUserFn.mutate(userId);

	return (

		<Card>
			<img src={userDefault} alt={`${username} profile photo`} width="140" height="140"/>
			<div>
				<p>{username}</p>
				<p>{userRole.title}</p>
				<div>
					<button title="Editar"><FaPen/></button>
				  <button title="Eliminar" onClick={handleDelete}><FaTrash/></button>
				</div>
			</div>
		</Card>

	);
};

export default PetCard;