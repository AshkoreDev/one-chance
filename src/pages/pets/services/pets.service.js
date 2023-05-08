import axios from 'axios';

const API = `http://localhost:3200/api/v1/`;

const petsAPI = axios.create({
	baseURL: `${API}pets`
});


export const getPets = async () => {

	const res = await petsAPI.get('/');
	const pets = res.data;
	
	return pets;
};

export const createPet = async (data) => {

	const res = await petsAPI.post('/', data);
	const pet = res.data;
	console.log(pet);
};
