import styled from 'styled-components';

export const Card = styled.article`
	width: 130px;
	height: 220px;
	padding: 5px;
	text-align: center;
	border-radius: 8px;
	outline: 2px solid darkgreen;

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
				font-size: 1rem;
				letter-spacing: 1px;
			}
		}

		& > div {
			display:flex;
			align-items: center;
			justify-content: center;
			gap: 10px;

			& > button {
				padding: 4px;
				color: #fff;
				font-size: 0.9rem;
				border: 1px solid grey;
				border-radius: 4px;
				background: orange;

				&:nth-child(2) {
					background: red;
				}

				@media (hover:hover) {
					&:hover {
						cursor: pointer;
						opacity: .6;
					}
				}
			}
		}
	}
`;