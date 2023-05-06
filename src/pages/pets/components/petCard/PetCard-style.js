import styled from 'styled-components';

export const Card = styled.article`
	width: 150px;
	height: 225px;
	padding: 5px;
	border-radius: 8px;
	outline: 2px solid darkgreen;
	// background: #7C9070;

	& > img {
		width: 140px;
		height: 140px;
		border-radius: inherit;
		background: grey;
	}

	& div {
		text-align: center;
		
		& > p {

			&:nth-child(1) {
				font-size: 1.2rem;
				font-weight: bold;
			}

			&:nth-child(2) {
				margin-bottom: 10px;
				font-size: 1.1rem;
				letter-spacing: 1px;
			}
		}

		& > a {
			color: darkgreen;
			letter-spacing: 1px;
		}
	}
`;