import React from 'react'
import styled from "styled-components";
import axios from 'axios';
import {Link} from "react-router-dom";
import Navbar from "../components/Navbar";


const MainDiv = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
	margin-bottom: 50px;
	background : #F5F5F5;
`;
const ChildDiv = styled.div`
    display: flex;
    flex-flow: column wrap;
    height: auto;
	width: auto;
`;

const InputText = styled.input`
            height: 40px;
            solid : #f6f6f6;
            width : 400px;
            text-align: center;
            margin-top:40px;
            margin-bottom: 20px;
            animation: input-field ease-in 2s;
`;

class profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            first_name:'',
            last_name:'',
            email:'',
            username:''
        };
       
    }


    componentDidMount() {
        axios.get('http://127.0.0.1:8000/my-profile/')
            .then(response => {
                console.log(response.data);
                this.setState({
                    title : response.data,

                })
            }).catch(error => {

        })
    }
    render() {
        const isLoggedIn = localStorage.getItem("isLoggedIn");

        return (
            <div>
               // <Navbar isLoggedIn = {isLoggedIn}/>
                <p>First Name : Munif </p>
                <p>Last Name : Dumb </p>
                <p>email : munif@gmail.com </p>
                <p>username : Dumb </p>
            </div>
        )
    }
}
export default profile