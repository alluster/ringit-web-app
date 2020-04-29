import React from 'react';
import Layout from '../layouts/layout';
import Container from '../components/Container';
import { withAuth, withLoginRequired } from 'use-auth0-hooks';
import ContentBlock from '../components/ContentBlock';

const Profile = () => {
	return(
		<Layout title="Profile" >
			<Container>
				<h3>Oma sivu</h3>
			
				<ContentBlock 
					blockName="Ringit"
				/>
			</Container>
		</Layout>
	)
}

export default withLoginRequired(withAuth(Profile))
