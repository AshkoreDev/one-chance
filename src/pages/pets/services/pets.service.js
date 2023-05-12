import axios from 'axios';
import { API } from './../../api.js';

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