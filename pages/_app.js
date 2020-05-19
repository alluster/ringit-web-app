import App from 'next/app';
import Provider from '../context/Provider';
import React from 'react';
import { Auth0Provider } from 'use-auth0-hooks';
import styled from 'styled-components';
import 'react-week-calendar/dist/style.less';
import { useRouter } from 'next/router'

const image = "./loader.svg"

const ImageContainer = styled.div`
	display: inline-block;
	height: 100%;
	margin-top: 40vh;
	vertical-align: middle;
	text-align: center;
	width: 100%;

	`;
const Image = styled.img`
	vertical-align: middle;
	max-height: 300px;
`;


const onRedirecting = () => {
	return (
		<ImageContainer>
			<Image src={image} />
		</ImageContainer>
	);
}

const onLoginError = (err) => {
	const Router = useRouter()
	Router.push({
		pathname: '/',
		query: {
			message: err.error_description || err.message
		}
	})
};
class MyApp extends App {

  render() {

    const { Component, pageProps } = this.props;
    return (
		<Auth0Provider
			onLoginError={onLoginError}
			onRedirecting={onRedirecting}
			domain={`${process.env.AUTHO_DOMAIN}`}
			clientId={`${process.env.AUTHO_CLIENT_ID}`}
			redirectUri={`${process.env.AUTHO_REDIRECT_URI}`}
		>
			<Provider>
				<Component {...pageProps} />
			</Provider>
		</Auth0Provider>
    );
  }
}

export default MyApp;