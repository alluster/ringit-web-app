import App from 'next/app';
import Provider from '../context/Provider';
import React from 'react';
import { Auth0Provider } from 'use-auth0-hooks';
import 'react-week-calendar/dist/style.less';

const onRedirecting = () => {
	return (
		<div>
			<h1>Signing you in</h1>
			<p>
				In order to access this page you will need to sign in.
				Please wait while we redirect you to the login page...
			</p>
		</div>
	);
};
class MyApp extends App {

  render() {

    const { Component, pageProps } = this.props;
    return (
		<Auth0Provider
			onRedirecting={onRedirecting}
			domain={`${process.env.AUTHO_DOMAIN}`}
			clientId={`${process.env.AUTHO_CLIENT_ID}`}
			redirectUri={`${process.env.AUTHO_REDIRECT_URI}` }
		>
			<Provider>
				<Component {...pageProps} />
			</Provider>
		</Auth0Provider>
    );
  }
}

export default MyApp;