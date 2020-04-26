import React from 'react';
import styled, { css } from 'styled-components';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBookmark } from '@fortawesome/free-solid-svg-icons'
// import Link from 'next/link';
import Gx from '@tgrx/gx';
import PropTypes from 'prop-types';
import Accordion from '../Accordion';



const Block = styled.div `
    color: black;
	z-index: 100000;
    max-width: 100%;
    height: auto;
    padding: 10px;
    border-radius: 4px;
	margin-top: 30px;
	background-color: white;
	box-shadow: 
		0 1px 2px rgba(0,0,0,0.02), 
		0 2px 4px rgba(0,0,0,0.02), 
		0 4px 8px rgba(0,0,0,0.02), 
		0 8px 16px rgba(0,0,0,0.02),
		0 16px 32px rgba(0,0,0,0.02), 
		0 32px 64px rgba(0,0,0,0.02);
    ${props => {
		if (props.open) return css`
			height: auto;
		`;
	}};
	
`;

let header = ""
let content = ""
const ContentBlock = (props) => {

	// const AccordionContent = () => { 
	// 	if(!props.content) return ( <p>No content available</p> )
	// 	else props.content.map((item, i) => {
	// 		<li key={i}>
	// 			{item}
	// 		</li>
	// 	})
	// }

	return(
		<div>
			<h4>{props.blockName || "Undefined name"}</h4>
			<Block >
				<Gx col={12} breakpoint={100}>
					<Accordion 
						header={header || "No header available"}
					>
					{content || <p>No content</p>} 
						{/* {AccordionContent()} */}
					</Accordion>
				</Gx>
			</Block>
		</div>
		
    )
}
ContentBlock.propTypes = {
	props: PropTypes.any,
	blockName: PropTypes.string
 };
export default ContentBlock;
