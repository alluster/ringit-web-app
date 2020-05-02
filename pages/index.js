import React from 'react';
import Layout from '../layouts/layoutNoNavigation';
import styled from 'styled-components';
import Link from 'next/link';


const HomeContainer = styled.div`
	text-align: center;
	margin-top: 60px;
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
const Home = () => {

	
		return(
			<Layout title="Home" >
				<HomeContainer>
					
					<h1 style={{
						textAlign: 'center'}}>
							Tervetuloa Ringit.fi palveluun.
					</h1>
					<h1 style={{
						fontSize: '80px', 
						textAlign: 'center', 
						margin:'0px'}}>
						😍
					</h1>
					<p style={{
						textAlign: 'center',
						margin: '0px;'}}>
							Olet vain pienen askeleen päässä oman ringin rakentamisesta. Voit vilkaista lisätietoa palvelustamme
					</p>
					<Link href="/about">
						<a >
							<p style={{
							color: '#275EFE', 
							textAlign: 'center',
							textDecoration: 'underline',
							fontWeight: 'bold',
							margin: '0px;'
							}}>Tästä</p>
						</a>
					</Link>
					<div>
					<Link href="/profile">
						<a>
							<RegisterButton>Rekisteröidy</RegisterButton>

						</a>
					</Link>
					</div>
					
					<div>
					<Link href="/profile">
						<a>
							<SignInButton >Tai kirjaudu sisään</SignInButton>

						</a>
					</Link>
					</div>
					

				</HomeContainer>
			</Layout>
		)
}

export default Home;
