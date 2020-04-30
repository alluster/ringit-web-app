import React from 'react';
import styled from 'styled-components';
import Head from '../components//head';
import { createGlobalStyle } from "styled-components";
import Navigation from '../components/Navigation';
import PropTypes from 'prop-types';
import theme from "../theme";
import { ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body, html {
        margin: 0px;
        padding: 0px;
		max-width: 100%;
        height: 100%;
		font-family: 'Open Sans', sans-serif;
		font-display: swap;
		color: ${props => props.theme.colors.brand.text}
		background-color: ${props => props.theme.colors.brand.background}

    }
    h1 {

        margin-left: 0;
		margin-right: 0;
		font-family: 'Bree Serif', serif;
    }
    h2 {

        margin-left: 0;
		margin-right: 0;
		font-family: 'Bree Serif', serif;
    }
    h3 {
  
        margin-left: 0;
		margin-right: 0;
		font-family: 'Bree Serif', serif;
    }
    h4 {
        margin-left: 0;
		margin-right: 0;
		font-family: 'Bree Serif', serif;
    }
    h5 {
      
        margin-left: 0;
		margin-right: 0;
		font-family: 'Bree Serif', serif;
    }
    h6 {
  
        margin-left: 0;
		margin-right: 0;
		font-family: 'Bree Serif', serif;
    }
    img {
        max-width: 100%;
    }
    a {
        all: unset;
    }
    a:link {
        all: unset;
    }
    a:focus {
        all: unset;
    }
    a:active {
        all: unset;
    }
    a:visited {
        all: unset;
    }
    a:hover {
        all: unset;
    }
    button {
        all: unset;
	}




    input {
        all: unset;
        ::-webkit-input-placeholder {
    }
    :-moz-placeholder {
        /* FF 4-18 */
        opacity: 1;
    }
    ::-moz-placeholder {
        /* FF 19+ */
        opacity: 1;
    }
    :-ms-input-placeholder {
        /* IE 10+ */
    }
    ::-ms-input-placeholder {
        /* Microsoft Edge */
    }
    ::placeholder {
        /* modern browser */
    }
    }
    
`;


const Nav = styled(Navigation)`
    display: inline-block;
  

`
const Content = styled.div`
	 min-height: 100vh;
	 margin-bottom: -600px;
`



const Layoutnonavigation = ({title, description, route, children}) => {
    return(
            <ThemeProvider theme={theme}>
				<Head 
					title={title}
					description={description}
					route={route}
				>
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta property="og:site_name" content="Certify" />
                    <link rel="icon" type="image/png" href="/favicon.ico" sizes="48x48" />
					<meta charset="UTF-8" />
					<meta name="keywords" content="Content,Certificate,Certifications,Free certification,"/>
					<meta name="author" content="Certify"/>
                    <link href="https://fonts.googleapis.com/css2?family=Bree+Serif&family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet" />


				</Head>
					
				
                       
				<Content >

					<header>
						

					</header>
					<GlobalStyle />
					{ children }
				</Content>


               
            </ThemeProvider>

        );
}
    
Layoutnonavigation.propTypes = {
	children: PropTypes.any,
	title: PropTypes.string,
	description: PropTypes.string,
	route: PropTypes.string
}
    

export default Layoutnonavigation;