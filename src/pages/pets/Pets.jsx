import PetList from './components/PetList.jsx';
import PetModal from './components/PetModal.jsx';
import NewButton from './../../components/newButton/NewButton.jsx';

function Pets() {

	return (

		<section className="content">
			{/*<NewButton title="Animales"/>*/}
			<PetModal/>
			<PetList/>
		</section>

	);
};

export default Pets;