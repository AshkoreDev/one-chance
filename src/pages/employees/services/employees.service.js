import axios from 'axios';
import { employeesEndpoint } from './../../api.js';

const employeesAPI = axios.create({
	baseURL: `${employeesEndpoint}`
});


export const getEmployees = async () => {

	const res = await employeesAPI.get('/');
	return res.data;
};

export const createEmployee = async (data) => {

	const res = await employeesAPI.post('/', data);
	return res.data;
};

export const updateEmployee = async (data) => {

	const res = await employeesAPI.patch(`/${id}`, data);
	return res.data;
};

export const deleteEmployee = async (id) => {

	const res = await employeesAPI.delete(`/${id}`);
	return res.data;
};