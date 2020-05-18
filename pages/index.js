import React, { useContext } from 'react';
import Layout from '../layouts/layoutNoNavigation';
import styled from 'styled-components';
import Link from 'next/link';
import { AppContext } from '../context/Context';

const image = './intro.svg'


const HomeContainer = styled.div`
	text-align: center;
	margin-top: 60px;
	padding-left: 10px;
	padding-right: 10px;


`

const ImageContainer = styled.div`
    max-width: 800px;
    margin: auto;
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
		max-width: 100%;
    }

	`;
	const Image = styled.img`
		max-height: 300px;
	`;


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
	margin-top: 10px;
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

const Home = () => {
	const context = useContext(AppContext)
	return(
		<Layout title="Ringit" >
			<HomeContainer>
				
				<ImageContainer>
						<Image src={image} alt="Welcome to Ringit" /> 
				</ImageContainer>
				<h1 style={{
					textAlign: 'center'}}>
						Ringit.fi
				</h1>
				<div>
					<RegisterButton onClick={() => context.login({ returnTo: process.env.AUTHO_REDIRECT_URI })}>Rekisteröidy</RegisterButton>
				</div>
				<div>
					<SignInButton onClick={() => context.login({ returnTo: process.env.AUTHO_REDIRECT_URI })}>Tai kirjaudu sisään</SignInButton>
				</div>
				<p style={{
					textAlign: 'center',
					margin: '0px'}}>
						Olet vain pienen askeleen päässä oman ringin rakentamisesta. Voit vilkaista lisätietoa palvelustamme.
				</p>
				<Link href="/about">
					<a >
						<p style={{
						color: '#275EFE', 
						textAlign: 'center',
						textDecoration: 'underline',
						fontWeight: 'bold',
						margin: '0px'
						}}>Tästä</p>
					</a>
				</Link>				
			</HomeContainer>
		</Layout>
	)
}

export default Home;
