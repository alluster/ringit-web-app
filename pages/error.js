import React, { useContext } from 'react';
import Layout from '../layouts/layoutNoNavigation';
import styled from 'styled-components';
import Link from 'next/link';
import { AppContext } from  '../context/Context';


const HomeContainer = styled.div`
	text-align: center;
	margin-top: 40px;
	padding-left: 10px;
	padding-right: 10px;


`



const RegisterButton = styled.button `
	background-color: ${props => props.theme.colors.brand.primary};
	color: white;
	-webkit-text-fill-color: white;
	height: 40px; 
	border-radius: 20px;
	text-align: center;
	line-height: 40px;
	font-weight: bold;
	font-size: 20px;
	padding-left: auto;
	padding-right: auto;
	margin-top: 50px;
	width: 500px;
	@media (max-width: ${props => props.theme.screenSize.tablet}) {
		width: 100%;
    }
`;

const SignInButton = styled.button `
	background-color: transparent;
	color: ${props => props.theme.colors.brand.primary};
	-webkit-text-fill-color: ${props => props.theme.colors.brand.primary};
	height: 40px; 
	border-radius: 20px;
	// border: 2px solid ${props => props.theme.colors.brand.primary};
	text-align: center;
	line-height: 40px;
	font-weight: bold;
	font-size: 14px;
	padding-left: auto;
	padding-right: auto;
	width: 500px;
	@media (max-width: ${props => props.theme.screenSize.tablet}) {
		width: 100%;
    }
`;
const ErrorPage = () => {
	const context = useContext(AppContext)

	
		return(
			<Layout title="Error" >
				<HomeContainer>
				<Link href="/">
					<a >
						<p style={{
						color: '#275EFE', 
						textAlign: 'center',
						textDecoration: 'underline',
						fontWeight: 'bold',
						marginTop: '20px;'
						}}>Palaa etusivulle</p>
					</a>
				</Link>
					
				<h1 style={{
					textAlign: 'center'}}>
						Törmäsimme johonkin ongelmaan
				</h1>
				<h4>Olemme pahoillamme. Selvitämme mistä on kyse</h4>
				<h2>Parasta olisi jos palaat takaisin etusivulle..</h2>
					
				<div>
					<RegisterButton onClick={() => context.login({ returnTo: process.env.AUTHO_REDIRECT_URI })}>Rekisteröidy</RegisterButton>
				</div>
				<div>
					<SignInButton onClick={() => context.login({ returnTo: process.env.AUTHO_REDIRECT_URI })}>Tai kirjaudu</SignInButton>
				</div>

				</HomeContainer>
			</Layout>
		)
}

export default ErrorPage;
