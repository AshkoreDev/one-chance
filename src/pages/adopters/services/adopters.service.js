import axios from 'axios';
import { API } from './../../api.js';

const adoptersAPI = axios.create({
	baseURL: `${API}adopters`
});


export const getAdopters = async () => {

	const res = await adoptersAPI.get('/');
	const pets = res.data;
	
	return pets;
};

export const createAdopter = async (data) => {

	const res = await adoptersAPI.post('/', data);
	const adopter = res.data;
	console.log('create: ', adopter);
};

export const updateAdopter = async (data) => {

	const res = await adoptersAPI.patch(`/${id}`, data);
	const adopter = res.data;
	console.log('update: ', adopter);
};

export const deleteAdopter = async (id) => {

	const res = await adoptersAPI.delete(`/${id}`);
	const adopter = res.data;
	console.log('delete: ', adopter);
};