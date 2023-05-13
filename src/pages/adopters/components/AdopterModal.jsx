import { useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Modal, ImageContainer, InputGroup, ButtonContainer } from './../../styles/Modal.style.js';

import userDefault from './../../../assets/user-default.svg';

function AdopterModal({ title, create }) {

	const [image, setImage] = useState(userDefault);

	const handleSubmit = (e) => {

		e.preventDefault();
		const formData = new FormData(e.target);
		const data = Object.fromEntries(formData);
		console.log(data);
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
					<label htmlFor="firstName">Nombre</label>
					<input type="text" id="firstName" name="firstName" autoFocus={true} autoComplete="off"/>
				</InputGroup>

				<InputGroup>
					<label htmlFor="lastName">Apellido</label>
					<input type="text" id="lastName" name="lastName" autoComplete="off"/>
				</InputGroup>
					
				<InputGroup>
					<label htmlFor="nationality">Nacionalidad</label>
					<input type="text" id="nationality" name="nationality" autoComplete="off"/>
				</InputGroup>

				<fieldset>
					<legend>Tipo de documento</legend>
					<div>
						<label htmlFor="dni">Dni</label>
						<input type="radio" id="dni" name="documentType" value="D"/>
						<label htmlFor="passport">Pasaporte</label>
					 	<input type="radio" id="passport" name="documentType" value="P"/>
					</div>
				</fieldset>

				<InputGroup>
					<label htmlFor="documentNumber">Número de documento</label>
					<input type="number" id="documentNumber" name="documentNumber" autoComplete="off"/>
				</InputGroup>

				<fieldset>
					<legend>Género</legend>
					<div>
						<label htmlFor="mujer">Mujer</label>
						<input type="radio" id="mujer" name="gender" value="F"/>
						<label htmlFor="hombre">Hombre</label>
					 	<input type="radio" id="hombre" name="gender" value="M"/>
					 	<label htmlFor="otro">Otro</label>
					 	<input type="radio" id="otro" name="gender" value="O"/>
					</div>
				</fieldset>

				<InputGroup>
					<label htmlFor="dateOfBirth">Fecha de nacimiento</label>
					<input type="date" id="dateOfBirth" name="dateOfBirth" autoComplete="off"/>
				</InputGroup>

				<InputGroup>
					<label htmlFor="telephone">Teléfono</label>
					<input type="text" id="telephone" name="telephone" autoComplete="off"/>
				</InputGroup>

				<InputGroup>
					<label htmlFor="address">Dirección</label>
					<textarea id="address" name="address"></textarea>
				</InputGroup>

				<InputGroup>
					<label htmlFor="status">Estatus</label>
					<select name="status" id="status">
						<option></option>
						<option value="A">Aprobado</option>
						<option value="R">Rechazado</option>
						<option value="O">En observación</option>
					</select>
				</InputGroup>

				<fieldset>
					<legend>Activo</legend>
					<div>
						<label htmlFor="activo">Activo</label>
						<input type="radio" id="activo" name="active" value="A"/>
						<label htmlFor="inactivo">Inactivo</label>
					 	<input type="radio" id="inactivo" name="active" value="I"/>
					</div>
				</fieldset>

			</section>

			<ButtonContainer>
				{
					(create)
						? <button>Guardar</button>
						: <button>Modificar</button>
				}
			</ButtonContainer>

		</Modal>

	);
};

export default AdopterModal;