import axios from 'axios';
import { adoptersEndpoint } from './../../api.js';

const adoptersAPI = axios.create({
	baseURL: `${adoptersEndpoint}`
});


export const getAdopters = async () => {

	const res = await adoptersAPI.get('/');
	return res.data;
};

export const createAdopter = async (data) => {

	const res = await adoptersAPI.post('/', data);
	return res.data;
};

export const updateAdopter = async (data) => {

	const res = await adoptersAPI.patch(`/${id}`, data);
	return res.data;
};

export const deleteAdopter = async (id) => {

	const res = await adoptersAPI.delete(`/${id}`);
	return res.data;
};