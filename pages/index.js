import React from 'react';
import LayoutNoNavigation from '../layouts/Layoutnonavigation';
// import styled from 'styled-components';
import Container from '../components/Container';

// import { AppContext } from  '../context/Context';

// const SignInButton = styled.button `
// 	background-color: ${props => props.theme.colors.primary};
// 	color: white;
// 	margin-left: auto;
// 	margin-right: auto;
// 	-webkit-text-fill-color: white;
// 	height: 40px; border-radius: 20px;
// 	text-align: center;
// 	line-height: 40px;
// 	font-weight: bold;
// 	font-size: 20px;
// 	padding-left: auto;
// 	padding-right: auto;
// 	margin-top: 50px;
// 	width: 500px;
// 	@media (max-width: ${props => props.theme.screenSize.tablet}) {
// 		width: 100%;
//     }
// `;
const Home = () => {
	// const context = useContext(AppContext)

	
		return(
			<LayoutNoNavigation title="Home" >
				<Container>
					<h3>Tervetuloa Ringit.fi palveluun.</h3>
				</Container>
			</LayoutNoNavigation>
		)
}

export default Home;
