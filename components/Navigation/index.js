import React from 'react';
import styled from 'styled-components';
import CustomLink from '../CustomLink';
import Gx from '@tgrx/gx';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSearch, faCog, faPlus } from '@fortawesome/free-solid-svg-icons'
// import { AppContext } from  '../../context/Context'
// import { useRouter } from 'next/router'


const Icon = styled(FontAwesomeIcon)`
    font-weight: 400;
    font-size: 16px;
    :hover {
        cursor: pointer;
	}
	
`;

// const AddNewContainer = styled.div `
// 	position: fixed;
// 	width: 100%;
// 	height: 100vh;
// 	bottom: -20;

// `

// const AddNew = styled.div `
// 	height: 50px; 
// 	width: 50px;
// 	border-radius: 25px;
// 	position: absolute;
// 	text-align: center;
// 	left: 50%;
// 	margin-left: -25px;
// 	line-height: 50px;
// 	color: white;
// 	background-color: ${props => props.theme.colors.primary};
// 	z-index: 1000;

// `


const NavContainer = styled.div`
    text-align: center;
    line-height: 40px;
	min-width: 100%;
	height: 40px;
	top: 0;
	position: relative;
	margin-bottom: -40px;
	background-color: white;
	box-shadow:
	2.8px 0 2.2px rgba(0, 0, 0, 0.034),
	6.7px 0 5.3px rgba(0, 0, 0, 0.048),
	12.5px 0 10px rgba(0, 0, 0, 0.06),
	22.3px 0 17.9px rgba(0, 0, 0, 0.072),
	41.8px 0 33.4px rgba(0, 0, 0, 0.086),
	100px 0 80px rgba(0, 0, 0, 0.12)
;

`;



const Navigation = ({ className }) => {
	// const router = useRouter()
	// const context = useContext(AppContext)  
    return(
		<NavContainer className={className} >
			<Gx col={3} breakpoint={100}>
				<CustomLink href="/profile" >
					<Icon icon={faUser} />
				</CustomLink>                
			</Gx>
			<Gx col={3} breakpoint={100}>
				<CustomLink href="/search">
					<Icon icon={faSearch} />
				</CustomLink>                
			</Gx>
			<Gx col={3} breakpoint={100}>
				<CustomLink href="/addrinki">
					<Icon icon={faPlus} />
				</CustomLink>                
			</Gx>
			<Gx col={3} breakpoint={100}>
				<CustomLink href="/settings">
					<Icon icon={faCog} />
				</CustomLink>                
			</Gx>
		</NavContainer>        
    );
};
Navigation.propTypes = {
    className: PropTypes.string
};

export default Navigation;