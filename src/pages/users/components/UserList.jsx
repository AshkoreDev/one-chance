import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getUsers } from './../services/users.service.js';
import Loader from './../../../components/loader/Loader.jsx';
import UserCard from './UserCard.jsx';
import { CardsList } from './../../styles/CardsList.style.js';

function PetList() {

	const [errorMessage, setErrorMessage] = useState('');
	const { data, isLoading, isError } = useQuery({
		queryKey: ['users'],
		queryFn: getUsers,
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

					return data.map((user) => <UserCard key={user.userId} user={user}/>)	
				}

			})()}

		</CardsList>

	);
};

export default PetList;