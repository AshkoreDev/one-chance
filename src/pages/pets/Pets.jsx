import PetList from './components/PetList.jsx';
import PetModal from './components/PetModal.jsx';
import NewButton from './../../components/newButton/NewButton.jsx';
import PetDetails from './components/PetDetails.jsx';

function Pets() {

	return (

		<section className="content">
			{/*<NewButton title="Animales"/>*/}
			{/*<PetModal title="Agregar nueva mascota" send={true}/>*/}
			<PetList/>
			{/*<PetDetails/>*/}
		</section>

	);
};

export default Pets;