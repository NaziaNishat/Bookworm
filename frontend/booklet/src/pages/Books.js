import React from 'react'
import Hero from '../components/Hero'
import Navbar from "../components/Navbar";
import styled from "styled-components";
import BookItem from "../components/BookItem"
import axios from "axios";
import RecipeReviewCard from "../components/SingleBookCart";
// const ChildDiv = styled.div`
//     display: flex;
//     flex-flow: row wrap;
//     justify-content: space-around;
//     height: auto;
// 	width: auto;
// 	margin-top: 20px;
// 	margin-bottom: 20px;
// 	background : #F5F5F5;
// `;

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

class Books extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            bookList: [],
        }
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
    onBookItemClick(bookId) {
        console.log(` my clicl ${bookId} jaj`);
        this.props.history.push('/books/'+bookId);
    }

    render()
    {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        const {bookList} = this.state;

        return (
            <div>
                <Navbar isLoggedIn = {isLoggedIn}/>
                <MainDiv>
                        {bookList.map(book => (
                            <BookItem key={book.id} book={book} onBookItemClick={this.onBookItemClick.bind(this)}/>
                        ))}
                </MainDiv>
            </div>

        )
    }
}

export default Books
