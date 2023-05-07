
function PetModal() {

	return (

			<div>
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
					<label htmlFor="active">Código</label>
					<input type="number" id="active" name="active"/>
				</div>
			</div>
	);
};

export default PetModal;