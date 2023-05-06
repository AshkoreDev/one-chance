import { PetSection } from './Pets-style.js';
import PetList from './components/PetList.jsx';
import NewButton from './../../components/newButton/NewButton.jsx';


function Pets() {

	return (

		<section className="content">
			<NewButton title="Animales"/>
			<PetSection>
				<PetList/>
			</PetSection>
		</section>

	);
};

export default Pets;