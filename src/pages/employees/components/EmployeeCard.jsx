import { FaPen, FaTrash } from "react-icons/fa";
import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { deleteAdopter } from './../services/adopters.service.js';
import { Card } from './../../styles/Card.style.js';

import userDefault from './../../../assets/user-default.svg';

function EmployeeCard({ employee }) {
	
	const { employeeId, firstName, lastName, documentType, documentNumber } = employee;

	
	return (

		<Card>
			<img src={userDefault} alt={`${firstName} ${lastName} profile photo`} width="140" height="140"/>
			<div>
				<p>{`${firstName} ${lastName}`}</p>
				<p>{`${documentType} ${documentNumber}`}</p>
				<div>
					<button title="Editar"><FaPen/></button>
				  {/*<button title="Eliminar" onClick={handleDelete}><FaTrash/></button>*/}
				</div>
			</div>
		</Card>

	);
};

export default EmployeeCard;