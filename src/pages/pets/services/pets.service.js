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
	console.log('create: ', pet);
};

export const updatePet = async (data) => {

	const res = await petsAPI.patch(`/${id}`, data);
	const pet = res.data;
	console.log('update: ', pet);
};

export const deletePet = async (id) => {

	const res = await petsAPI.delete(`/${id}`);
	const pet = res.data;
	console.log('delete: ', pet);
};