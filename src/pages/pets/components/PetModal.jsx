import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPet } from './../services/pets.service.js';
import { Modal, InputGroup } from './../styles/PetModal.style.js';

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

			<Modal onSubmit={handleSubmit}>
				<h2>PETS</h2>
				<InputGroup>
					<label htmlFor="code">Código</label>
					<input type="text" id="code" name="code"/>
				</InputGroup>
				<InputGroup>
					<label htmlFor="name">Nombre</label>
					<input type="text" id="name" name="name"/>
				</InputGroup>
				<InputGroup>
					<label htmlFor="image">Imagen</label>
					<input type="text" id="image" name="image"/>
				</InputGroup>
				<InputGroup>
					<label htmlFor="age">Edad</label>
					<input type="text" id="age" name="age"/>
				</InputGroup>
				<InputGroup>
					<label htmlFor="sex">Sexo</label>
					<input type="text" id="sex" name="sex"/>
				</InputGroup>
				<InputGroup>
					<label htmlFor="specieId">Especie</label>
					<input type="number" id="specieId" name="specieId"/>
				</InputGroup>
				<InputGroup>
					<label htmlFor="breedId">Raza</label>
					<input type="number" id="breedId" name="breedId"/>
				</InputGroup>
				<InputGroup>
					<label htmlFor="currentHealth">Salud</label>
					<input type="text" id="currentHealth" name="currentHealth"/>
				</InputGroup>
				<InputGroup>
					<label htmlFor="currentMedicine">Medicina actual</label>
					<input type="text" id="currentMedicine" name="currentMedicine"/>
				</InputGroup>
				<InputGroup>
					<label htmlFor="medicalHistory">Historia médica</label>
					<input type="text" id="medicalHistory" name="medicalHistory"/>
				</InputGroup>
				<InputGroup>
					<label htmlFor="adoptionStatusId">Estatus</label>
					<input type="number" id="adoptionStatusId" name="adoptionStatusId"/>
				</InputGroup>
				<InputGroup>
					<label htmlFor="active">Activo</label>
					<input type="text" id="active" name="active"/>
				</InputGroup>

				<button>Enviar</button>
			</Modal>
	);
};

export default PetModal;