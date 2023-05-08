import styled from 'styled-components';

export const Modal = styled.article`
	width: 300px;
	margin: 10px auto;
	padding: 10px;
	outline: 1px solid grey;
	border-radius: 4px;
	text-align: center;

	& h2 {
		margin-bottom: 20px;
		padding-bottom: 10px;
		border-bottom: 1px solid grey;
	}

	& button {
		width: 100px;
		height: 30px;
		margin-top: 20px;
		border-radius: 4px;

		@media (hover:hover) {
			cursor: pointer;
		}
	}
`;

export const InputGroup = styled.div`
	margin: 10px 0;
	display: flex;
	flex-direction: column;
	gap: 5px;

	& label {
		font-weight: 600;
		text-align: start;
	}

	& input {
		padding: 5px 10px;
		border-radius: 4px;
		border: 1px solid grey;
	}
`;