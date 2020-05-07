import React, { useState, useEffect } from 'react';
import { AppContext } from './Context';
import PropTypes from 'prop-types';
import { useAuth } from 'use-auth0-hooks';
import axios from 'axios';

const Provider = ({children}) => {
	
	const { isAuthenticated, login, logout, user, signup  } = useAuth();
	const [ isLoading, setIsLoading ] = useState(false);
	const [ loadingMessage, setLoadingMessage ] = useState();
	const [ ringit, setRingit ] = useState([]);
	const [ rinki, setRinki ] = useState([]);
	const [ authenticated, setAuthenticated ] = useState(false)

	const LoadingContent = () => {
		setLoadingMessage("Loading content...") 
		setTimeout(() => { 
			setLoadingMessage("Unfortunately something went wrong. We are working on this. Please return to previous page and try again")  
		}, 8000)
		setTimeout(() => {
			setLoadingMessage("")  
		}, 14000)
	}
	const GetRingitByOwner = async (user) => {
		await axios.get(`/api/getringitbyowner/${user}`, {
		})
		.then(function (response) {
			let data = response.data
			setRingit(data)
		})
		.catch(function (error) {
			console.log(error);
		})
		.finally(function () {
		});
	}
	const GetRinkiById = async (id) => {
		await axios.get(`/api/getrinkibyid/${id}`, {
		})
		.then(function (response) {
			let data = response.data[0]
			console.log(data)
			setRinki(data)
		})
		.catch(function (error) {
			console.log(error);
		})
		.finally(function () {
		});
	}
	useEffect(() => {
	}, []);
        return (
            <AppContext.Provider 
                value={{
					GetRingitByOwner,
					GetRinkiById,
					rinki,
					ringit,
					signup,
                    logout,
					isAuthenticated,
					authenticated,
					setAuthenticated,
                    login,
					user,
					isLoading,
					setIsLoading,
					LoadingContent,
					loadingMessage,
                }} 
            >
                {children}
            </AppContext.Provider>
        );
    }
    Provider.propTypes = {
        children: PropTypes.object
     };

     export default Provider;