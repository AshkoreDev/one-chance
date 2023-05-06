import axios from 'axios';

const API = `http://localhost:3200/api/v1/`;

const petsAPI = axios.create({
	baseURL: API
});


export const getPets = async () => {

	const res = await petsAPI.get('/pets');
	const pets = res.data;
	
	return pets;
};
