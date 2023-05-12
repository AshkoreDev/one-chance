import axios from 'axios';
import { API } from './../../api.js';

const employeesAPI = axios.create({
	baseURL: `${API}employees`
});


export const getEmployees = async () => {

	const res = await employeesAPI.get('/');
	const employees = res.data;
	
	return employees;
};

export const createEmployee = async (data) => {

	const res = await employeesAPI.post('/', data);
	const employee = res.data;
	console.log('create: ', employee);
};

export const updateEmployee = async (data) => {

	const res = await employeesAPI.patch(`/${id}`, data);
	const employee = res.data;
	console.log('update: ', employee);
};

export const deleteEmployee = async (id) => {

	const res = await employeesAPI.delete(`/${id}`);
	const employee = res.data;
	console.log('delete: ', employee);
};