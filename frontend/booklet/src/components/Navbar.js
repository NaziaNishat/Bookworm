import React, { Component } from 'react'
import styled from "styled-components";
import logo from '../images/logo1.svg';
import { FaAlignRight } from "react-icons/fa";
import {Link} from "react-router-dom";


const ItemDiv = styled.div`
	flex-direction: row;
	margin-left: 50px;
`;
export default class Navbar extends Component {
    state = {
        isOpen :false,
        isLoggedInBool: 0
    }
    handleToggle = () =>{
        this.setState({isOpen:!this.state.isOpen});

    }
    onLogout = () => {
        localStorage.clear();

    }
    render() {

        const {isLoggedIn} = this.props;
        console.log(`---- ${isLoggedIn}`);
        // if(isLoggedIn === '1') {
        //     this.state.isLoggedInBool= 1;
        // } else {
        //     this.state.isLoggedInBool= 0;
        // }
        return (
            <nav className="navbar">
                <div className="nav-center">
                     <div className="nav-header">
                          <Link to="/">
                              <img src={logo} alt="booklet" height="100dp" />
                           </Link>

                           <button type="button" className="nav-btn" onClick={this.handleToggle}>
                                 <FaAlignRight className="nav-icon"/>
                           </button>
                    </div>
                    <ItemDiv>
                        {(() => {
                            if (isLoggedIn === '1') {
                                return (
                                    <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/books">Books</Link>
                                        </li>
                                        <li>
                                            <Link to="/share">share</Link>
                                        </li>
                                        <li>
                                            <Link to="/sell">sell</Link>
                                        </li>
                                        <li>
                                            <Link onClick={this.onLogout} to="/">Logout</Link>
                                        </li>
                                    </ul>);}
                            else{
                                return (
                                    <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                                        <li>
                                            <Link to="/signUp">SignUp</Link>
                                        </li>
                                        <li>
                                            <Link to="/signIn">SignIn</Link>
                                        </li>
                                    </ul>)
                            }
                        })()}
                    </ItemDiv>


                </div>
            </nav>
        )
    }
}
