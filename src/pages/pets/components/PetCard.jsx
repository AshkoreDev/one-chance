import { Card } from './../styles/PetCard-style.js';

function PetCard({ pet }) {

	const { name, code } = pet;

	return (

		<Card>
			<img src="" alt="" width="140" height="140"/>
			<div>
				<p>{name}</p>
				<p>{code}</p>
				<a href="#">Detalles</a>
			</div>
		</Card>

	);
};

export default PetCard;