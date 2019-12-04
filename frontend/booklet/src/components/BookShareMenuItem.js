import React from "react";
import styled from "styled-components";

const Div = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 225px;
	height: 100px;	
	margin-top: 15px;	
	border: ${props => props.selected ? `2px solid #FFCD00` : `0px solid #FFFFFF`};	
	background-color: #FFFFFF;	
	box-shadow: 0 1px 2px 0 rgba(0,0,0,0.2);
	cursor: pointer;
`;

const BookShareMenuItem = props => (
    <Div selected={props.selectedShareMenuId === '1'} onClick={() => props.onShareMenuClick()}>Share Books</Div>
);

export default BookShareMenuItem;
