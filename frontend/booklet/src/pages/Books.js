import React from 'react'
import Hero from '../components/Hero'
import Navbar from "../components/Navbar";
import styled from "styled-components";

const ChildDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    height: auto;
	width: auto;
	margin-top: 20px;
	margin-bottom: 20px;
	background : #F5F5F5;
`;

const MainDiv = styled.div`
    display: flex;
    flex-flow: column wrap;
    margin-top: 50px;
	margin-bottom: 50px;
	background : #F5F5F5;
`;

class Books extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            bookList: [],
        }
    }
    render()
    {
        const isLoggedIn = localStorage.getItem("isLoggedIn");

        return (
            <div>
                <Navbar isLoggedIn = {isLoggedIn}/>

            </div>
        )
    }
}

export default Books
