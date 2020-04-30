import React from 'react';
import { useRouter } from 'next/router'
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';





function CustomLink({ children, href }) {
  	const router = useRouter()
  

	const Styled = styled.div`
		margin-right: 10px;
		color: ${props => props.theme.colors.brand.disabled};
		${props => {
			if (props.pathName === href) return css`
				color: ${props => props.theme.colors.brand.primary};
			`;
		}};

	`

 
	const handleClick = e => {
		e.preventDefault()
		router.push(href)
	}

	return (
		<a  onClick={handleClick} >
			<Styled pathName={router.pathname} href={href} >
				{children}
			</Styled>
		</a>
	
	)
}

CustomLink.propTypes = {
	children: PropTypes.any,
	href: PropTypes.string
	
 };
export default CustomLink;