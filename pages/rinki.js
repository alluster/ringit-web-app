import React, { useEffect } from 'react';
import Layout from '../layouts/layout';
// import { withRouter } from 'next/router';
// import PropTypes from 'prop-types';
// import fetch from 'isomorphic-unfetch';

const Rinki = () => {
	
	// function reformatName(y){
	// 	if(y === null){ return "undefined" }
	// 	else return y.replace('.', ' ').replace(/(?:^|\s)\S/g, a => a.toUpperCase());
	// }
	

	useEffect(() => {
	}, []);
	return(
		<Layout 
			title="Uusi rinki"
		>
			<h3>Tällä sivulla voit luoda uuden ringin</h3>
		</Layout>		
	)
}

// RINKI.propTypes = {

	
//  };
//  Certification.getInitialProps = async function(router) {
// 	const res = await fetch(`${process.env.AUTHO_RETURN_URL}/getcertification/${router.query.id}`)
// 	const data = await res.json()
// 	return {
// 		certification: data[0]
// 	}
//   };

// export default withRouter(Certification);
export default Rinki;