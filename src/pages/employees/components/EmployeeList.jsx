import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getEmployees } from './../services/employees.service.js';
import Loader from './../../../components/loader/Loader.jsx';
import EmployeeCard from './EmployeeCard.jsx';
import { CardsList } from './../../styles/CardsList.style.js';

function EmployeeList() {

	const [errorMessage, setErrorMessage] = useState('');

	const { data, isLoading, isError } = useQuery({
		queryKey: ['employees'],
		queryFn: getEmployees,
		onError: (data) => setErrorMessage(data.response.data.message)
	});

	return (

		<CardsList>

			{(() => { 

				if(isLoading) {

					return <Loader title="Cargando"/>

				} else if(isError) {

					return <Loader title={errorMessage}/>

				} else {

					return data.map((employee) => <EmployeeCard key={employee.petId} employee={employee}/>)	
				}

			})()}

		</CardsList>

	);
};

export default EmployeeList;