import PetList from './components/PetList.jsx';
import NewButton from './../../components/newButton/NewButton.jsx';

function Pets() {

	return (

		<section className="content">
			<NewButton title="Animales"/>
			<PetList/>
		</section>

	);
};

export default Pets;