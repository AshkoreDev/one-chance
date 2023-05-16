
export const validateData = (data) => {

	const { code, name, age, sex, specieId, breedId, currentHealth, currentMedicine, medicalHistory, adoptionStatusId, active } = data;

	if(code.trim() === '') {

		alert('EL CAMPO CODIGO NO PUEDE ESTAR VACIO.');

	} else if(name.trim() === '') {

		alert('EL CAMPO NOMBRE NO PUEDE ESTAR VACIO.');

	} else if(age.trim() === '') {

		alert('EL CAMPO EDAD NO PUEDE ESTAR VACIO.');

	} else if(sex === undefined) {

		alert('EL CAMPO SEXO NO PUEDE ESTAR VACIO.');

	} else if(specieId.trim() === '') {

		alert('EL CAMPO ESPECIE NO PUEDE ESTAR VACIO.');

	} else if(breedId.trim() === '') {

		alert('EL CAMPO RAZA NO PUEDE ESTAR VACIO.');

	} else if(currentHealth.trim() === '') {

		alert('EL CAMPO SALUD NO PUEDE ESTAR VACIO.');

	} else if(currentMedicine.trim() === '') {

		alert('EL CAMPO MEDICINA ACTUAL NO PUEDE ESTAR VACIO.');

	} else if(medicalHistory.trim() === '') {

		alert('EL CAMPO HISTORIA MÉDICA NO PUEDE ESTAR VACIO.');

	} else if(adoptionStatusId.trim() === '') {

		alert('EL CAMPO ESTATUS NO PUEDE ESTAR VACIO.');

	} else if(active === undefined) {

		alert('EL CAMPO ACTIVO NO PUEDE ESTAR VACIO.');

	} else {

		const newData = {
			code: code.trim(),
			name: name.trim(),
			age: age.trim(),
			sex,
			specieId: specieId.trim(),
			breedId: specieId.trim(),
			currentHealth: currentHealth.trim(),
			currentMedicine: currentMedicine.trim(),
			medicalHistory: medicalHistory.trim(),
			adoptionStatusId: adoptionStatusId.trim(),
			active,
		};

		const send = true;
		return { newData, send };
	}
};