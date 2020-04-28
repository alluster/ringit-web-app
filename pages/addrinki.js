import React, { useEffect } from 'react';
import Layout from '../layouts/layout';
// import { withRouter } from 'next/router';
// import PropTypes from 'prop-types';
import AddRinki from '../components/AddRinki';

const Addrinki = () => {
	
	// function reformatName(y){
	// 	if(y === null){ return "undefined" }
	// 	else return y.replace('.', ' ').replace(/(?:^|\s)\S/g, a => a.toUpperCase());
	// }
	

	useEffect(() => {
		console.log()
	}, []);
	return(
		<Layout 
			title="Uusi rinki"
		>
			<h3>Tällä sivulla voit luoda uuden ringin</h3>
			<AddRinki />
		</Layout>		
	)
}


	// let id = "123"
	// let owner = "Allu"
	// let date = "456789"
	// let name = "Porakone"
	// let location = "Taimistontie 8 b 33 00390 Helsinki"
	// let image = ""
	// let description = "Tämä on porakone"
 
//  Rinki.getInitialProps = async function() {
// 	await fetch(`${process.env.AUTHO_RETURN_URL}/api/addrinki/${id}/${owner}/${date}/${name}/${location}/${image}/${description}`)
// 	// const data = await res.json()
// 	// return {
// 	// 	rinki: data[0]
// 	// }
//   };

// export default withRouter(Certification);
export default Addrinki;