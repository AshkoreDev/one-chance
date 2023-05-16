import axios from 'axios';
import { petsEndpoint } from './../../api.js';

const petsAPI = axios.create({
	baseURL: `${petsEndpoint}`
});


export const getPets = async () => {

	const res = await petsAPI.get('/');
	return res.data;
};

export const createPet = async (data) => {

	const res = await petsAPI.post('/', data);
	return res.data;
};

export const updatePet = async (data) => {

	const res = await petsAPI.patch(`/${id}`, data);
	return res.data;
};

export const deletePet = async (id) => {

	const res = await petsAPI.delete(`/${id}`);
	return res.data;
};