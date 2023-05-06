import { DotPulse } from '@uiball/loaders';
import { LoaderSection } from './Loader-style.js';

function Loader({ title }) {

	return (

		<LoaderSection>
			<h2>{title}</h2>
			<DotPulse size={50} speed={1.3} color="black"/>
		</LoaderSection>

	);
};

export default Loader;