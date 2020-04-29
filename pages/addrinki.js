import React, { useEffect } from 'react';
import Layout from '../layouts/layout';
// import { withRouter } from 'next/router';
// import PropTypes from 'prop-types';
import AddRinki from '../components/AddRinki';

const Addrinki = () => {

	useEffect(() => {
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

export default Addrinki;