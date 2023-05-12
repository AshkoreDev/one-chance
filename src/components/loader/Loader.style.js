import styled from 'styled-components';

export const LoaderSection = styled.section` 
	width: 300px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;

	@media screen and (min-width: 768px) {
		width: 400px;
	}

	& > h2 {
		font-size: 1.3rem;
		text-align: center;
	}
`;