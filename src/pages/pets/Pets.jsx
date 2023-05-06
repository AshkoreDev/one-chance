import { PetSection } from './Pets-style.js';
import PetCard from './components/petCard/PetCard.jsx';
import NewButton from './../../components/newButton/NewButton.jsx';


function Pets() {

	return (

		<section className="content">
			<NewButton title="Animales"/>
			<PetSection>
				<PetCard/>
				<PetCard/>
				<PetCard/>
				<PetCard/>
				<PetCard/>
				<PetCard/>
				<PetCard/>
			</PetSection>
		</section>

	);
};

export default Pets;