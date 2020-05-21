import React, { useContext, useEffect } from 'react';
import Layout from '../layouts/layoutNoNavigation';
import styled from 'styled-components';
import Link from 'next/link';
import { AppContext } from  '../context/Context';
import { destroyCookie } from 'nookies'

const HomeContainer = styled.div`
	text-align: center;
	margin-top: 40px;
	padding-left: 10px;
	padding-right: 10px;


`

const ErrorPage = () => {
	const context = useContext(AppContext)

	useEffect(() => {

		destroyCookie(null, 'auth0.is.authenticated')
		
	}, [])
		return(
			<Layout title="Error" >
				<HomeContainer>
					<Link href="/profile" >
						<a onClick={() => context.logout({ returnTo: process.env.AUTHO_RETURN_URL })}>
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
							Voi ei!
					</h1>
					<h4>Törmäsimme ongelmaan</h4>
					<h2>Parasta olisi jos palaat takaisin etusivulle..</h2>
						
					
				</HomeContainer>
			</Layout>
		)
}

export default ErrorPage;
