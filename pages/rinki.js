import React from 'react';
import Layout from '../layouts/layout';
import { withRouter } from 'next/router';
import Container from '../components/Container';
import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';
import Reservation from '../components/Reservation';

const Rinki = (props) => {

	return(
		<Layout title="Rinki" >
			<Container>
				<h3>{ props.rinki.name || "" }</h3>
				<h4>Perustiedot</h4>
				<h5>{ props.rinki.description || ""  }</h5>
				<h5>Sijainti: { props.rinki.location || "" }</h5>
				<Reservation />
			</Container>
		</Layout>
	)
}

Rinki.getInitialProps = async function(router) {
	const res = await fetch(`${process.env.AUTHO_RETURN_URL}/api/getrinkibyid/${router.query.id}`)
	const data = await res.json()
	return {
		rinki: data[0]
	}
  };
  Rinki.propTypes = {
	props: PropTypes.any,
	rinki: PropTypes.any

 };
export default withRouter(Rinki)
