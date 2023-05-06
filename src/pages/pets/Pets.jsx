import { PetSection } from './Pets-style.js';
import PetCard from './components/petCard/PetCard.jsx';

function Pets() {

	return (

		<PetSection className="content">
			<PetCard/>
		</PetSection>

	);
};

export default Pets;