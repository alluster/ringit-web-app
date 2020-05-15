import React from 'react';
import Layout from '../layouts/layout';
import Container from '../components/Container';
import { withAuth, withLoginRequired } from 'use-auth0-hooks';
import ContentBlock from '../components/ContentBlock';
import styled from 'styled-components';
import Link from 'next/link';
// import { AppContext } from '../context/Context';
// import fetch from 'isomorphic-unfetch';

const AddNewButton = styled.button `
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
const Profile = () => {
	
	return(
		<Layout title="Profile" >
			<Container>
				<h3>Oma sivu</h3>
			
				<ContentBlock 
					blockName="Ringit"
				/>
				<Link href="/addrinki">
					<a>
						<AddNewButton >Luo uusi Rinki</AddNewButton>
					</a>
				</Link>
			</Container>
		</Layout>
	)
}
// Profile.getInitialProps = async function() {
// 	const profiledata = await fetch(`${process.env.AUTHO_RETURN_URL}/api/getringitbyowner/aleksanteri.heliovaara@gmail.com`)
// 	const data = await profiledata.json();
// 	return {
// 		ringit: data,
		
// 	}
	
	
//   };

export default withLoginRequired(withAuth(Profile))
