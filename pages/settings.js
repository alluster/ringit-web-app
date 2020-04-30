import React, { useContext }from 'react';
import Layout from '../layouts/layout';
import Container from '../components/Container';
// import { withAuth, withLoginRequired } from 'use-auth0-hooks';
import { AppContext } from  '../context/Context'
// import ContentBlock from '../components/ContentBlock';
const Settings = () => {

	const context = useContext(AppContext)  
	// function reformatName(y){
	// 	if(y === null){ return "undefined" }
	// 	else return y.replace('.', ' ').replace(/(?:^|\s)\S/g, a => a.toUpperCase());
	// }
	

	return(
		<Layout title="Settings" >
		<Container>
			<h3>Asetukset</h3>
			<button onClick={() => context.logout({ returnTo: process.env.AUTHO_RETURN_URL })}>Log out</button>
		</Container>
		
		</Layout>
	)
}
export default Settings
// export default withLoginRequired(withAuth(Profile))
