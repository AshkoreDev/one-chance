
export const validateData = (data) => {

	const { email, username, password, roleId, employeeId, active } = data;

	if(email.trim() === '') {

		alert('EL CAMPO CORREO NO PUEDE ESTAR VACIO.');

	} else if(username.trim() === '') {

		alert('EL CAMPO USUARIO NO PUEDE ESTAR VACIO.');

	} else if(password.trim() === '') {

		alert('EL CAMPO CONTRASEÑA NO PUEDE ESTAR VACIO.');

	} else if(roleId.trim() === '') {

		alert('EL CAMPO ROL NO PUEDE ESTAR VACIO.');

	} else if(employeeId.trim() === '') {

		alert('EL CAMPO EMPLEADO NO PUEDE ESTAR VACIO.');

	} else if(active === undefined) {

		alert('EL CAMPO ACTIVO NO PUEDE ESTAR VACIO.');

	} else {

		const newData = {
			email: email.trim(),
			username: username.trim(),
			password: password.trim(),
			roleId: roleId.trim(),
			employeeId: employeeId.trim(),
			active,
		};

		console.log(newData);
	}
};