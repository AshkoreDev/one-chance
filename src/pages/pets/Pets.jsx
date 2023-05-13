import PetList from './components/PetList.jsx';
import PetModal from './components/PetModal.jsx';
import NewButton from './../../components/newButton/NewButton.jsx';
import PetDetails from './components/PetDetails.jsx';

function Pets() {

	return (

		<section className="content">
			{/*<NewButton title="Mascotas"/>*/}
			<PetModal title="Agregar nueva mascota" create={true}/>
			{/*<PetList/>*/}
			{/*<PetDetails/>*/}
		</section>

	);
};

export default Pets;