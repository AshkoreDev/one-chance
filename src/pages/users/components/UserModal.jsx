import { useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import { validateData } from './../validation.js';
import { Modal, ImageContainer, InputGroup, ButtonContainer } from './../../styles/Modal.style.js';

import userDefault from './../../../assets/user-default.svg';

function UserModal({ title, create }) {

	const [image, setImage] = useState(userDefault);

	const handleSubmit = (e) => {

		e.preventDefault();
		const formData = new FormData(e.target);
		const data = Object.fromEntries(formData);

		validateData(data);
	};

	const handleImage = (e) => document.getElementById('image').click(e);
	const handleChangeImage = (e) => setImage(`./src/assets/${e.target.files[0].name}`);

	return (

		<Modal onSubmit={handleSubmit}>
			<h2>{title}</h2>
				
			<section>
				{/*<ImageContainer>
					<img src={image} alt="" width="100" height="100"/>
					<div>
						<FaCamera onClick={handleImage}/>
						<label htmlFor="image"></label>
						<input type="file" id="image" name="image" accept="image/*" onChange={handleChangeImage}/>
					</div>
				</ImageContainer>
*/}
				<InputGroup>
					<label htmlFor="email">Correo</label>
					<input type="email" id="email" name="email" autoFocus={true} autoComplete="off"/>
				</InputGroup>

				<InputGroup>
					<label htmlFor="username">Usuario</label>
					<input type="text" id="username" name="username" autoComplete="off"/>
				</InputGroup>
					
				<InputGroup>
					<label htmlFor="password">Contraseña</label>
					<input type="password" id="password" name="password" autoComplete="off"/>
				</InputGroup>

				<InputGroup>
					<label htmlFor="roleId">Rol</label>
					<input type="number" id="roleId" name="roleId" autoComplete="off"/>
				</InputGroup>

				<InputGroup>
					<label htmlFor="employeeId">Empleado</label>
					<input type="number" id="employeeId" name="employeeId" autoComplete="off"/>
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

export default UserModal;