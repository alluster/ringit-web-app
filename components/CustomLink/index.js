import React from 'react';
import { useRouter } from 'next/router'
import PropTypes from 'prop-types';

function CustomLink({ children, href }) {
  const router = useRouter()
  const style = {
    marginRight: 10,
    color: router.pathname === href ? '#3461FF' : '#85A0FF',
  }
  
  const handleClick = e => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  )
}

CustomLink.propTypes = {
	children: PropTypes.any,
	href: PropTypes.string
	
 };
export default CustomLink;