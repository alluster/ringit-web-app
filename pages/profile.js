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

//  Profile.getInitialProps = async function(useAuth) {
// 	const {user}= useAuth()

// 	await fetch(`${process.env.AUTHO_RETURN_URL}/api/getringitbyowner/${user.email}`)
// 	const data = await res.json()
// 	return {
// 		ringit: data[0]
// 	}
//   };
export default withLoginRequired(withAuth(Profile))
