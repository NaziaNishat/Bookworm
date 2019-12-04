import React from 'react'
import Hero from '../components/Hero'
import Navbar from "../components/Navbar";
import styled from "styled-components";
import BookItem from "../components/BookItem"
import axios from "axios";
import RecipeReviewCard from "../components/SingleBookCart";
import BookSellMenuItem from "../components/BookSellMenuItem";
import BookShareMenuItem from "../components/BookShareMenuItem"
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
const Body = styled.div`
    display: flex;
    flex-direction: row;
    width:auto;
    height:auto;
`;
const BookMenuDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: flex-start;
	width: 100%;
	height: auto;
	margin-top: 80px;
`;

class MyBooks extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            bookList: [],
            selectedSellMenuId:'0',
            selectedShareMenuId:'1'
        }
        this.onShareMenuClick = this.onShareMenuClick.bind(this);
        this.onSellMenuClick = this.onSellMenuClick.bind(this);
    }

    getUserToken(){
        return JSON.parse(localStorage.getItem("userToken"));
    }

    componentDidMount() {console.log('clicked share') ;
        this.setState({
            selectedSellMenuId : '0',
            selectedShareMenuId : '1'
        });
        axios.get('http://127.0.0.1:8000/my-shared-books',{
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.getUserToken().access}`
            }
        }).then(response => {
            console.log('I am in good'+response.status);
            console.log(response.data);
            this.setState({
                bookList : response.data,

            })
        }).catch(error => {
                const statusCode = error.response.status;
                console.log('I am in bad '+error.response.status);
                let refresh = this.getUserToken().refresh;
                console.log(refresh);
                if(statusCode=== 401) {
                    axios.post('http://127.0.0.1:8000/api/token/refresh/', {refresh:this.getUserToken().refresh })
                        .then(response => {
                            console.log(response.data.access);
                            axios.get('http://127.0.0.1:8000/my-shared-books', {
                                headers:{
                                    'Content-Type': 'application/json',
                                    'Authorization': `Bearer ${response.data.access}`
                                }
                            }).then(response => {
                                console.log('I am in good under bad'+response.status);
                                console.log(response.data);
                                this.setState({
                                    bookList : response.data,

                                })
                            }).catch(error => {
                                console.log(error);
                            })
                        })
                        .catch(error => {
                                console.log(error +"refreesh token api error");
                            }
                        )
                }
                console.log(error);
            }
        )
    }

    onShareMenuClick() {
        console.log('clicked share') ;
        this.setState({
            selectedSellMenuId : '0',
            selectedShareMenuId : '1'
        });
        axios.get('http://127.0.0.1:8000/my-shared-books',{
            headers:{
                'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.getUserToken().access}`
            }
        }).then(response => {
            console.log('I am in good'+response.status);
            console.log(response.data);
            this.setState({
                bookList : response.data,

            })
        }).catch(error => {
                const statusCode = error.response.status;
                console.log('I am in bad '+error.response.status);
                let refresh = this.getUserToken().refresh;
                console.log(refresh);
                if(statusCode=== 401) {
                    axios.post('http://127.0.0.1:8000/api/token/refresh/', {refresh:this.getUserToken().refresh })
                        .then(response => {
                            console.log(response.data.access);
                            axios.get('http://127.0.0.1:8000/my-shared-books', {
                                headers:{
                                    'Content-Type': 'application/json',
                                    'Authorization': `Bearer ${response.data.access}`
                                }
                            }).then(response => {
                                console.log('I am in good under bad'+response.status);
                                console.log(response.data);
                                this.setState({
                                    bookList : response.data,

                                })
                            }).catch(error => {
                                console.log(error);
                            })
                        })
                        .catch(error => {
                                console.log(error +"refreesh token api error");
                            }
                        )
                }
                console.log(error);
            }
        )
    }
    onSellMenuClick() {
        console.log('clicked sell') ;
        this.setState({
            selectedSellMenuId : '1',
            selectedShareMenuId : '0'
        });
        axios.get('http://127.0.0.1:8000/my-books-for-sale',{
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.getUserToken().access}`
            }
        }).then(response => {
            console.log('I am in good'+response.status);
            console.log(response.data);
            this.setState({
                bookList : response.data,

            })
        }).catch(error => {
                const statusCode = error.response.status;
                console.log('I am in bad '+error.response.status);
                let refresh = this.getUserToken().refresh;
                console.log(refresh);
                if(statusCode=== 401) {
                    axios.post('http://127.0.0.1:8000/api/token/refresh/', {refresh:this.getUserToken().refresh })
                        .then(response => {
                            console.log(response.data.access);
                            axios.get('http://127.0.0.1:8000/my-books-for-sale', {
                                headers:{
                                    'Content-Type': 'application/json',
                                    'Authorization': `Bearer ${response.data.access}`
                                }
                            }).then(response => {
                                console.log('I am in good under bad'+response.status);
                                console.log(response.data);
                                this.setState({
                                    bookList : response.data,

                                })
                            }).catch(error => {
                                console.log(error);
                            })
                        })
                        .catch(error => {
                                console.log(error +"refreesh token api error");
                            }
                        )
                }
                console.log(error);
            }
        )
    }

    render()
    {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        const {bookList} = this.state;

        return (
            <div>
                <Navbar isLoggedIn = {isLoggedIn}/>
                <Body>
                    <BookMenuDiv>
                        <BookShareMenuItem onShareMenuClick = {this.onShareMenuClick} selectedShareMenuId={this.state.selectedShareMenuId}/>
                        <BookSellMenuItem onSellMenuClick = {this.onSellMenuClick} selectedSellMenuId={this.state.selectedSellMenuId}/>
                    </BookMenuDiv>
                    {/*<AssetNameList selectedAssetId={selectedAssetId} onClickAsset={onClickAsset}/>*/}
                    {/*<AssetDetailsLayout data={assetInfo} pageName={pageName}/>*/}
                </Body>
                <MainDiv>
                    {bookList.map(book => (
                        <BookItem key={book.id} book={book}/>
                    ))}
                </MainDiv>
            </div>

        )
    }
}

export default MyBooks
