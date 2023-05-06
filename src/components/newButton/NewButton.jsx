import { FaPlus } from "react-icons/fa";
import { NewSection } from './NewButton-style.js';

function NewButton({ title }) {

	return (

		<NewSection>
			<h2>{title}</h2>
			<button><FaPlus/>Nuevo</button>
		</NewSection>

	);
};

export default NewButton;