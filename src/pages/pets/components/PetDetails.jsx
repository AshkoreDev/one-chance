import { DetailsCard } from './../../styles/CardDetails.style.js';
import PetModal from './PetModal.jsx';

function PetDetails() {

	return (

		<DetailsCard>
			<PetModal title="Más información de Julia" send={false}/>
		</DetailsCard>
		
	);
};

export default PetDetails;