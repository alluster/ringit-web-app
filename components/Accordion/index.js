import React, { useState }from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Gx from '@tgrx/gx';
import PropTypes from 'prop-types';
// import { AppContext } from  '../../context/Context'

const AccordionContainer = styled.div `
    background-color: white;
    color: black;
	z-index: 100000;
    max-width: 100%;
    height: auto;
`;
    
const AccordionContent = styled.div `
    width: 100%;
    height: auto;
	display: none;
    ${props => {
		if (props.open) return css`
			display: block;
		`;
	}};
	
`;

const Accordion = ( {header, children} ) => {
	const [ toggle, setToggle ] = useState(false)
	// const context = useContext(AppContext)  

	return(
		<AccordionContainer 
			onClick={ () => setToggle(!toggle)} open={toggle}
		>
			<Gx col={10} breakpoint={100}>
				{header}
			</Gx>
			<span style={{ textAlign: "right" }}>
				<Gx col={2} breakpoint={100} >
					<FontAwesomeIcon icon={ 
					faStar
						} 
						
						/>
				</Gx>
			</span>
			
			<AccordionContent open={toggle}>
				{children}
			</AccordionContent>

        </AccordionContainer>
    )
}
Accordion.propTypes = {
	props: PropTypes.any,
	header: PropTypes.string,
	children: PropTypes.any,
 };
export default Accordion;
