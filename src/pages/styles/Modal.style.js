import styled from 'styled-components';

export const Modal = styled.form`
	width: 300px;
	// margin: 10px auto;
	padding: 10px;
	text-align: center;
	outline: 1px solid grey;
	border-radius: 4px;

	& > section {
		width: 100%;
		margin: 15px auto;
		padding: 15px;
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
    align-items: center;
		justify-content: space-between;
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
	}

	@media screen and (min-width: 768px) {
		width: 650px;
	}
`;

export const ImageContainer = styled.figure`
	width: 280px;
	position: relative;

	& img {
		width: 100px;
		height: 100px;
		outline: 2px solid grey;
		border-radius: 50%;
	}

	& > div {
		width: 30px;
		height: 30px;
		padding: 5px;
		position: absolute;
		bottom: 10px;
		right: 80px;
		outline: 1px solid grey;
		border-radius: 50%;
		background: grey;

		& > input {
			display: none;
		}

		& > svg {
			color: #fff;
			font-size: 1.15rem;

			@media (hover:hover) {
				cursor: pointer;
			}
		}
	}
`;

export const InputGroup = styled.div`
	width: 280px;
	display: flex;
	flex-direction: column;
	gap: 5px;

	& label {
		font-weight: 600;
		text-align: start;
	}

	& input, select {
		padding: 8px 10px;
		border-radius: 4px;
		border: 1px solid grey;
	}

	& > textarea {
		resize: none;
		height: 60px;
		padding: 5px 10px;
		border-radius: 4px;
		border: 1px solid grey;
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;

	& > button {
		width: 100px;
		height: 30px;
		color: #fff;
		border: transparent;
		outline-offset: 2px;
		outline: 1px solid green;
		border-radius: 4px;
		background:  green;

		&:nth-child(2) {
			background:  red;
			outline-color: red;
		}

		@media (hover:hover) {
			cursor: pointer;
		}
	}
`;