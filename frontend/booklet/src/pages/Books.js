import React from 'react'
import Hero from '../components/Hero'
import Navbar from "../components/Navbar";
import styled from "styled-components";
import BookItem from "../components/BookItem"
import axios from "axios";
// import {input} from "milligram"
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

const InputText = styled.input`
            height: 40px;
            solid : #f6f6f6;
            width : 400px;
            text-align: center;
            margin-top:40px;
            margin-bottom: 20px;
            animation: input-field ease-in 2s;
`;

class Books extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            bookList: [],
            serach: ''
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

    updateSearch(event) {
        this.setState({
            search: event.target.value.substr(0,20)
        });
    }

    render()
    {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        let {bookList,search} = this.state;
        console.log('good    '+search)
        let filteredBooks;
        if(search !== undefined) {
            filteredBooks = bookList.filter(
                (book) => {
                    return (book.title.indexOf(this.state.search)!==-1) || (book.category.indexOf(this.state.search) !== -1) || (book.author.indexOf(this.state.search) !== -1);
                }
            );
        }
        else {
            filteredBooks = bookList;
        }


        return (
            <div>
                <Navbar isLoggedIn = {isLoggedIn}/>
                <MainDiv>
                        <InputText
                        type="text"
                        value={this.state.search}
                        placeholder={"Give title, category, author name to search"}
                        onChange={this.updateSearch.bind(this)}/>
                        {filteredBooks.map(book => (
                            <BookItem key={book.id} book={book} onBookItemClick={this.onBookItemClick.bind(this)}/>
                        ))}
                </MainDiv>
            </div>

        )
    }
}

export default Books
