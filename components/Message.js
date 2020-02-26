import React, {useEffect} from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';

const Message = ({user, dispatch}) => {

	useEffect(() => {

    	if(user.message.length) {
			setTimeout(() => {
		  		document.getElementById('Message').style.left = "20px";
			}, 200);
			setTimeout(() => {
				if(user.message.length) {
			  		document.getElementById('Message').style.left = "-500px";
			  	}
			}, 3200);
	    	setTimeout(() => {
			  	dispatch({ type: 'SET_MESSAGE', message: "" });
			}, 3700);
    	}
	}, [user.message, dispatch]) 

	if(user.message.length) {
		return (
			<Wrapper id="Message">
				{user.message}
			</Wrapper>
		);
	} else {
		return false;
	}
}

const Wrapper = styled.div`
	position: absolute;
	left: -500px;
	bottom: 30px;
	padding: 15px 30px;
	text-align: center;
	background-color: white;
	color: #C4A712;
	transition: left 0.4s;
	box-shadow: 0px 0px 5px #0004;
`;

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(Message);