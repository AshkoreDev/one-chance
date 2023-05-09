import { Card } from './../../styles/Card.style.js';
import petDefault from './../../../assets/pet-default.svg';

function PetCard({ pet }) {

	const { image, name, petAdoptionStatus } = pet;

	return (

		<Card>
			<img src={petDefault} alt={`${name} profile photo`} width="140" height="140"/>
			<div>
				<p>{name}</p>
				<p>{petAdoptionStatus.title}</p>
				<a href="#">Detalles</a>
			</div>
		</Card>

	);
};

export default PetCard;