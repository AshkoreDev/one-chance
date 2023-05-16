import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPet } from './services/pets.service.js';

export const useSendPetData = () => {

	const [errorMessage, setErrorMessage] = useState('');
	const queryClient = useQueryClient();

	const createPetFn = useMutation({
		mutationFn: createPet,
		onSuccess: () => { 
			console.log('enviado');
			console.log('Cerrar modal');
			queryClient.invalidateQueries('pets');
		},
		onError: () => {
			setErrorMessage('error por modificar');
		}
	});

	const sendData = (data, image) => createPetFn.mutate({ ...data, image });

	return { errorMessage, sendData };
};