import { ErrorContainer } from './ErrorPage.style.js';

function ErrorPage() {

	return(

		<ErrorContainer className="content">
			<h2>Error 404</h2>
			<h3>Página no encontrada.</h3>
			<a href="/">Ir al incio</a>
		</ErrorContainer>

	);
};

export default ErrorPage;