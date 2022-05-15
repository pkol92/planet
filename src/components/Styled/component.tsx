import styled from "styled-components";

export const Login = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	padding: 1.3rem;
`;

export const Header = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	padding: 1rem;
	color: #f5f5f5;
`;

export const Input = styled.input`
	border-radius: 3px;
`;

export const ErrorLogin = styled.h5`
	color: #990505;
	padding: 0.2rem;
	margin: 0.1rem;
	background-color: rgb(255 255 255 / 29%);
	border-radius: 3px;
`;

export const Error = styled.h1`
	color: #b50808;
	border-radius: 3px;
	position: absolute;
	top: 40%;
	right: 0;
	left: 0;
	text-align: center;
`;

export const Button = styled.button`
  padding: 0.6em 2em;
  border: none;
  outline: none;
  color: rgb(255, 255, 255);
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  :before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    -webkit-filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing-button-85 20s linear infinite;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }
  
  @keyframes glowing-button-85 {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
  
  :after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #222;
    left: 0;
    top: 0;
    border-radius: 10px;
`;

export const TableStyles = styled.div`
	padding: 1rem;

	table {
		text-align: justify;
		border-collapse: collapse;
		width: 100%;

		tr {
			:last-child {
				td {
					border-bottom: 0;
				}
			}
		}

		th,
		td {
			margin: 0;
			padding: 0.4rem;
		}
	}

	.pagination {
		padding: 0.5rem;
	}
`;

export const TablePageStyles = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 1rem;
`;
