import * as React from "react";
import styled from "styled-components";
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from "react-router-dom"
import Services from "../components/Services"
import ChildDiv from "../components/ChildDiv"
import RecipeReviewCard from "../components/SingleBookCart"
import axios from 'axios';
import MainDiv from '../components/MainDiv'
import Navbar from "../components/Navbar";

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            bookList : [ ],
        };
    }


    render() {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        const  {bookList } = this.state;
        return (
            <React.Fragment>
                <Navbar isLoggedIn = {isLoggedIn}/>
                <MainDiv>
                    <Hero >
                        <Banner title="BOOKLET" subtitle="Welcome to the world of desire">
                            <Link to="/books" className="btn-primary">Get Them</Link>
                        </Banner>
                    </Hero>


                    <h2>Book List</h2>

                    <ChildDiv>
                        {bookList.map(book => (
                            <RecipeReviewCard key={book.id} book={book}/>
                        ))}
                        {/*<RecipeReviewCard book = {bookList}></RecipeReviewCard>*/}
                    </ChildDiv>
                    <Services/>
                </MainDiv>

            </React.Fragment>
        )
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/books/')
            .then(response => {
                console.log(response.data);
                this.setState({
                    bookList : response.data,

                })
            }).catch(error => {

        })
    }
}
export default Home
