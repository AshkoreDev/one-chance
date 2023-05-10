import { useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPet } from './../services/pets.service.js';
import { Modal, ImageContainer, InputGroup, ButtonContainer } from './../../styles/Modal.style.js';

import petDefault from './../../../assets/pet-default.svg';

function PetModal({ title, send }) {

	const [image, setImage] = useState(petDefault);

	const queryClient = useQueryClient();

	const addPet = useMutation({
		mutationFn: createPet,
		onSuccess: () => { 
			console.log('enviado');
			queryClient.invalidateQueries('pets');
		}
	});

	const handleSubmit = (e) => {

		e.preventDefault();
		const formData = new FormData(e.target);
		const data = Object.fromEntries(formData);
		console.log(data);
		addPet.mutate({ ...data, image });
	};

	const handleImage = (e) => document.getElementById('image').click(e);
	const handleChangeImage = (e) => setImage(`./src/assets/${e.target.files[0].name}`);

	return (

		<Modal onSubmit={handleSubmit}>
			<h2>{title}</h2>
				
			<section>
				<ImageContainer>
					<img src={image} alt="" width="100" height="100"/>
					<div>
						<FaCamera onClick={handleImage}/>
						<label htmlFor="image"></label>
						<input type="file" id="image" name="image" accept="image/*" onChange={handleChangeImage}/>
					</div>
				</ImageContainer>

				<InputGroup>
					<label htmlFor="code">Código</label>
					<input type="text" id="code" name="code" autoFocus={true} autoComplete="off"/>
				</InputGroup>

				<InputGroup>
					<label htmlFor="name">Nombre</label>
					<input type="text" id="name" name="name" autoComplete="off"/>
				</InputGroup>
					
				<InputGroup>
					<label htmlFor="age">Edad</label>
					<input type="text" id="age" name="age" autoComplete="off"/>
				</InputGroup>

				<InputGroup>
					<label htmlFor="sex">Sexo</label>
					<input type="text" id="sex" name="sex" autoComplete="off"/>
				</InputGroup>

				<InputGroup>
					<label htmlFor="specieId">Especie</label>
					<input type="number" id="specieId" name="specieId" autoComplete="off"/>
				</InputGroup>

				<InputGroup>
					<label htmlFor="breedId">Raza</label>
					<input type="number" id="breedId" name="breedId" autoComplete="off"/>
				</InputGroup>

				<InputGroup>
					<label htmlFor="currentHealth">Salud</label>
					<textarea id="currentHealth" name="currentHealth"></textarea>
				</InputGroup>

				<InputGroup>
					<label htmlFor="currentMedicine">Medicina actual</label>
					<textarea id="currentMedicine" name="currentMedicine"></textarea>
				</InputGroup>

				<InputGroup>
					<label htmlFor="medicalHistory">Historia médica</label>
					<textarea id="medicalHistory" name="medicalHistory"></textarea>
				</InputGroup>

				<InputGroup>
					<label htmlFor="adoptionStatusId">Estatus</label>
					<input type="number" id="adoptionStatusId" name="adoptionStatusId" autoComplete="off"/>
				</InputGroup>

				<InputGroup>
					<label htmlFor="active">Activo</label>
					<select id="active" name="active">
						<option value="A">Activo</option>
						<option value="I">Inactivo</option>
					</select>
				</InputGroup>

			</section>

			<ButtonContainer>
				{
					(send)
						? <button>Guardar</button>
						: <button>Modificar</button>
				}
			</ButtonContainer>

		</Modal>

	);
};

export default PetModal;