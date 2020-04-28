import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from  '../../context/Context';
import axios from 'axios';



    


const Input = styled.input`
	font-family: inherit;
	width: 100%;
	border: 0;
	border-bottom: 1px solid gray;
	outline: 0;
	color: $white;
	padding: 7px 0;
	background: transparent;
	transition: border-color 0.2s;
  
	::placeholder {
		color: gray;
		font-size: 10px;
		font-weight: 300;
		font-style: italic;	  
	}
  
	
}`

const SubmitButton = styled.button `
	background-color: blue;
	color: white;
	-webkit-text-fill-color: white;
	height: 40px; border-radius: 20px;
	text-align: center;
	line-height: 40px;
	font-weight: bold;
	font-size: 20px;
	padding-left: auto;
	padding-right: auto;
	margin-top: 50px;
	width: 500px;
	@media (max-width: ${props => props.theme.screenSize.tablet}) {
		width: 100%;
    }
`;


const AddRinki = () => {
	const initialState = {
		owner: "",
		created: Date.now(),
		name: "",
		location: "",
		image: "",
		description: ""
	}
	const [{ created, name, location, image, description }, setState] = useState(initialState);
	const context = useContext(AppContext)  
	const inputChange = e => {
		const { name, value } = e.target;
		setState(prevState => ({ ...prevState, [name]: value }));
	};
	const clearState = () => {
		setState({ ...initialState });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			return await axios.get('/api/addrinki',  {
				params: {
					owner: context.user.email,
					created: created,
					name: name,
					location: location,
					image: image,
					description: description
					
				}	
			})
			.then(clearState())
		} 
		catch (error) {
			console.error(error)
		}
	}
	return(
		<div>
			
				<form onSubmit={handleSubmit} >
					<Input placeholder="Name" name="name" value={name} onChange={inputChange} type="text" />
					<Input placeholder="Description" name="description" value={description} onChange={inputChange} type="text" />	
					<Input placeholder="Location" name="location" value={location} onChange={inputChange} type="text" />
					<SubmitButton onClick={e => handleSubmit(e)}>Submit</SubmitButton>
				</form>
        </div>
    )
}

export default AddRinki;
