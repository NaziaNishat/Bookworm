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

const BookSellMenuItem = props => (
    <Div selected={props.selectedSellMenuId === '1'} onClick={() => props.onSellMenuClick()}>Sell Books</Div>
);

export default BookSellMenuItem;
