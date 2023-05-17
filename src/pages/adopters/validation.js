
export const validateData = (data) => {

	const { firstName, lastName, nationality, documentType, documentNumber, gender, dateOfBirth, telephone, address, status, active } = data;

	if(firstName.trim() === '') {

		alert('EL CAMPO NOMBRE NO PUEDE ESTAR VACIO.');

	} else if(lastName.trim() === '') {

		alert('EL CAMPO APELLIDO NO PUEDE ESTAR VACIO.');

	} else if(nationality.trim() === '') {

		alert('EL CAMPO NACIONALIDAD NO PUEDE ESTAR VACIO.');

	} else if(documentType === undefined) {

		alert('EL CAMPO TIPO DE DOCUMENTO NO PUEDE ESTAR VACIO.');

	} else if(documentNumber.trim() === '') {

		alert('EL CAMPO NÚMERO DE DOCUMENTO NO PUEDE ESTAR VACIO.');

	} else if(gender === undefined) {

		alert('EL CAMPO GÉNERO NO PUEDE ESTAR VACIO.');

	} else if(dateOfBirth.trim() === '') {

		alert('EL CAMPO FECHA DE NACIMIENTO NO PUEDE ESTAR VACIO.');

	} else if(telephone.trim() === '') {

		alert('EL CAMPO TELÉFONO NO PUEDE ESTAR VACIO.');

	} else if(address.trim() === '') {

		alert('EL CAMPO DIRECCIÓN NO PUEDE ESTAR VACIO.');

	} else if(status.trim() === '') {

		alert('EL CAMPO ESTATUS NO PUEDE ESTAR VACIO.');

	} else if(active === undefined) {

		alert('EL CAMPO ACTIVO NO PUEDE ESTAR VACIO.');

	} else {

		const newData = {
			firstName: firstName.trim(),
			lastName: lastName.trim(),
			nationality: nationality.trim(),
			documentType,
			documentNumber: documentNumber.trim(),
			gender,
			dateOfBirth: dateOfBirth.trim(),
			telephone: telephone.trim(),
			address: address.trim(),
			status: status.trim(),
			active,
		};

		console.log(newData);
	}
};