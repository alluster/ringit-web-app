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
import Accordion from '../components/Accordion';
import { faTrash, faUser } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';

const AccordionContainer = styled.div`
	padding: 15px;
	min-height: 20px;
`

const Rinki = (props) => {
	const handleClick = (e) => {
		e.preventDefault()
		context.DeleteRinki(props.rinki.id);
		props.router.push('/profile');
		alert("Rinki on poistettu")
	}
	
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

	const users = () => { return ( props.rinkiusers.map((item, i) =>  <Accordion key={i} header={item.user_email} icon={faUser}></Accordion>))}
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
				<h4>Asetukset</h4>
				<Accordion header="Poista Rinki" icon={faTrash}>
					<AccordionContainer>
						<p>Oletko varma että haluat poistaa ringin? Toimintoa ei voi perua ja kaikki ringin jäsenet poistetaan ringistä automaattisesti.</p>
						<Button onClick={e => handleClick(e)}>Poista rinki</Button>

					</AccordionContainer>
					</Accordion>
			</Container>
		</Layout>
	)
}

Rinki.getInitialProps = async function(router) {
	const rinkidata = await fetch(`${process.env.BASE_URL}/api/getrinkibyid/${router.query.id}`)
	const rinkiusers = await fetch(`${process.env.BASE_URL}/api/getrinkiusers/${router.query.id}`)
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
