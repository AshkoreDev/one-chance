import AdopterList from './components/AdopterList.jsx';
import AdopterModal from './components/AdopterModal.jsx';


function Adopters() {

	return (

		<section className="content">
			{/*<AdopterList/>*/}
			<AdopterModal title="Agregar nuevo adoptante" create={true}/>
		</section>

	);
};

export default Adopters;