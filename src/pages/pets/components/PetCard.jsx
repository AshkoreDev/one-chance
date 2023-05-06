import { Card } from './../styles/PetCard-style.js';

function PetCard({ pet }) {

	const { name, petAdoptionStatus } = pet;

	return (

		<Card>
			<img src="" alt="" width="140" height="140"/>
			<div>
				<p>{name}</p>
				<p>{petAdoptionStatus.title}</p>
				<a href="#">Detalles</a>
			</div>
		</Card>

	);
};

export default PetCard;