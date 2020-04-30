import React, { useEffect } from 'react';
import Layout from '../layouts/layout';
// import { withRouter } from 'next/router';
// import PropTypes from 'prop-types';
import AddRinki from '../components/AddRinki';
import Container from '../components/Container';

const Addrinki = () => {

	useEffect(() => {
	}, []);
	return(
		<Layout 
			title="Uusi rinki"
		>
			<Container>
				<h3>Luo uusi Rinki</h3>
				<AddRinki />
			</Container>
		</Layout>		
	)
}

export default Addrinki;