import React from 'react';
import NextHead from 'next/head';
import { string } from 'prop-types';

const fallbackRoute = '/';
const SITE_URL_SECURE = 'https://ringit.herokuapp.com';
const SITE_URL = 'https://ringit.herokuapp.com';
const fallbackOgImage = SITE_URL + '/fallbackOgImage.jpg';
const fallbackOgImageSecure = SITE_URL_SECURE + '/fallbackOgImage.jpg';
const metaDescription = 'Rakenna rinki';
const fallbackTitle = 'Rinki.fi';
const description = "Rinki -palvelun avulla voit luoda ystävillesi ajanvarausjärjestelmän."

const Head = ({ title, ogImage, route }) => {
    route = route || fallbackRoute;
    if (!route.startsWith('/')) {
        route = '/' + route;
	}
	


	
    return (
        <NextHead>
            
            <meta property="og:url" content={SITE_URL + route || SITE_URL} />
            <meta property="og:title" content={`${title}` || fallbackTitle} />
            <meta property="og:type" content="website" />
            <meta property="og:description" content={description || metaDescription} />
            <meta name="description" content={description || metaDescription} />
			<meta property="og:image:type" content="image/jpeg" />
			<meta property="og:image:alt" content="Certify" />
			<meta property="og:image:width" content="400" />
			<meta property="og:image:height" content="300" />
            <meta property="og:image" content={ogImage || fallbackOgImage} />
			<meta property="og:image:secure_url" content={ogImage || fallbackOgImageSecure} />
			<title>{title ? title : 'Certify'}</title>
        </NextHead>
    );
};

Head.propTypes = {
	title: string,
	route: string,
    description: string,
    url: string,
    ogImage: string
};

export default Head;
