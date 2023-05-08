import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPet } from './../services/pets.service.js';

function PetModal() {

	const queryClient = useQueryClient();

	const addPet = useMutation({
		mutationFn: createPet,
		onSuccess: () => { 
			// console.log('enviado');
			queryClient.invalidateQueries('pets');
		}
	});

	const handleSubmit = (e) => {

		e.preventDefault();
		const formData = new FormData(e.target);
		const data = Object.fromEntries(formData);
	};

	return (

			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="code">Código</label>
					<input type="text" id="code" name="code"/>
				</div>
				<div>
					<label htmlFor="name">Nombre</label>
					<input type="text" id="name" name="name"/>
				</div>
				<div>
					<label htmlFor="image">Imagen</label>
					<input type="text" id="image" name="image"/>
				</div>
				<div>
					<label htmlFor="age">Edad</label>
					<input type="text" id="age" name="age"/>
				</div>
				<div>
					<label htmlFor="sex">Sexo</label>
					<input type="text" id="sex" name="sex"/>
				</div>
				<div>
					<label htmlFor="specieId">Especie</label>
					<input type="number" id="specieId" name="specieId"/>
				</div>
				<div>
					<label htmlFor="breedId">Raza</label>
					<input type="number" id="breedId" name="breedId"/>
				</div>
				<div>
					<label htmlFor="currentHealth">Salud</label>
					<input type="text" id="currentHealth" name="currentHealth"/>
				</div>
				<div>
					<label htmlFor="currentMedicine">Medicina actual</label>
					<input type="text" id="currentMedicine" name="currentMedicine"/>
				</div>
				<div>
					<label htmlFor="medicalHistory">Historia médica</label>
					<input type="text" id="medicalHistory" name="medicalHistory"/>
				</div>
				<div>
					<label htmlFor="adoptionStatusId">Estatus</label>
					<input type="number" id="adoptionStatusId" name="adoptionStatusId"/>
				</div>
				<div>
					<label htmlFor="active">Activo</label>
					<input type="text" id="active" name="active"/>
				</div>

				<button>Enviar</button>
			</form>
	);
};

export default PetModal;