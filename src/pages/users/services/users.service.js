import axios from 'axios';
import { usersEndpoint } from './../../api.js';

const usersAPI = axios.create({
	baseURL: `${usersEndpoint}`
});


export const getUsers = async () => {

	const res = await usersAPI.get('/');
	return res.data;
};

export const createUser = async (data) => {

	const res = await usersAPI.post('/', data);
	return res.data;
};

export const updateUser = async (data) => {

	const res = await usersAPI.patch(`/${id}`, data);
	return res.data;
};

export const deleteUser = async (id) => {

	const res = await usersAPI.delete(`/${id}`);
	return res.data;
};