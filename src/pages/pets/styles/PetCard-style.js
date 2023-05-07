import styled from 'styled-components';

export const Card = styled.article`
	width: 130px;
	height: 210px;
	padding: 5px;
	text-align: center;
	border-radius: 8px;
	outline: 2px solid darkgreen;
	// background: #7C9070;

	& > img {
		width: 120px;
		height: 120px;
		border-radius: inherit;
		background: grey;
	}

	& div {
		margin-top: 5px;
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