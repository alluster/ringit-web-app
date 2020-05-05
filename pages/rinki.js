import React, { useContext, useState, useEffect } from 'react';
import Layout from '../layouts/layout';
import { withRouter } from 'next/router';
import Container from '../components/Container';
import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';
import { AppContext } from '../context/Context';
import Reservation from '../components/Reservation';
import axios from 'axios';
import Button from '../components/Button';

const Rinki = (props) => {



	const context = useContext(AppContext)  
	const [ setUserInRinki ] = useState(false)
	const addUserToRinki = async (e) => {
		e.preventDefault();
		try {
			return await axios.get('/api/addusertorinki',  {
				params: {
					id_user: context.user.sub,
					id_rinki: props.router.query.id,	
					user_email: context.user.email			
				}	
			})
		} 
		catch (error) {
			console.error(error)
		}
	}
	// console.log(context.user)

	// console.log(props.rinkiusers)
	// console.log('user is in the rinki:', userInRinki)


	const users = () => { return ( props.rinkiusers.map((item, i) =>  <p key={i}>{item.user_email}</p>))}
	const inrinki =  () => { 
		return (props.rinkiusers.filter(user => 
			(!user.id_user === context.user.sub ? setUserInRinki(true) : null)
		))	
	}
useEffect(() => {

	{ context.user ? inrinki() : null}

}, [])
	return(
		<Layout title="Rinki" >
			<Container>
				<h3>{ props.rinki.name || "" }</h3>
				<h4>Perustiedot</h4>
				<h5>{ props.rinki.description || ""  }</h5>
				<h5>Sijainti: { props.rinki.location || "" }</h5>
				<Button onClick={e => addUserToRinki(e)}>Liity rinkiin</Button>
				<Reservation />
				<h4>Ringin jäsenet</h4>
				{users()}
			</Container>
		</Layout>
	)
}

Rinki.getInitialProps = async function(router) {
	const rinkidata = await fetch(`${process.env.AUTHO_RETURN_URL}/api/getrinkibyid/${router.query.id}`)
	const rinkiusers = await fetch(`${process.env.AUTHO_RETURN_URL}/api/getrinkiusers/${router.query.id}`)
	const users = await rinkiusers.json()
	const data = await rinkidata.json()
	return {
		rinki: data[0],
		rinkiusers: users
	}
	
  };
  Rinki.propTypes = {
	props: PropTypes.any,
	rinki: PropTypes.any,
	router: PropTypes.any,
	rinkiusers: PropTypes.any

 };
export default withRouter(Rinki)
