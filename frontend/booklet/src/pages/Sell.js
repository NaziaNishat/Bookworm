import React from 'react'
import styled from "styled-components";
import axios from 'axios';
import {Link} from "react-router-dom";
import Navbar from "../components/Navbar";

const MainDiv = styled.div`
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
`;

const ContentBorder = styled.div`
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 30vw;
            padding-top: 15px;
            border-radius: 10px 10px 10px 10px;
            border: 1px solid #56baed;
           // box-shadow: 0 0 3px 1px rgba(0,0,0,0.12);
            background: #fff;
            box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
            animation: drop 1s ease forwards ;
`
const FormDiv = styled.form`
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 60px;
`
const InputText = styled.input`
            height: 40px;
            solid #f6f6f6;
            text-align: center;
            margin-top:10px;
            margin-bottom: 20px;
            animation: input-field ease-in 2s;
`;

const TextArea = styled.textarea`
            height: 100px;
            solid #f6f6f6;
            text-align: center;
            margin-top:10px;
            margin-bottom: 20px;
            animation: input-field ease-in 2s;
`;
const StyledButton = styled.button`
   height: 41px;
   width: 135px;
   margin-bottom:20px;
   border-radius: 10px;
   background-color: skyblue;
   text-align: center;
   color: #442305;
   font-family: Roboto;
   font-size: 16px;
   font-weight: bold;
`;

class Sell extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title:'',
            author:'',
            isbn: '',
            thumbnail:'',
            category:'',
            type:'sell',
            price:'',
            description:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {

        this.setState({
            [event.target.name]: event.target.value
        });
    }

    getUserToken(){
        return JSON.parse(localStorage.getItem("userToken"));
    }

    handleSubmit(event) {
        event.preventDefault();
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.getUserToken().access}`
        }
        console.log('pressed');
        const data = new FormData(event.target);

        console.log(this.state.title);

        let author = data.get('author');
        let category = data.get('category');
        console.log(`Bearer ${this.getUserToken().access}`);
        console.log(this.state);
        axios.post('http://127.0.0.1:8000/sharesell/',this.state, {
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.getUserToken().access}`
            }
            }).then(response => {
                console.log('I am in good'+response.status);
                this.props.history.push('/books/');

                console.log("request successful :  "+response.data);
            }).catch(error => {
                    const statusCode = error.response.status;
                    console.log('I am in bad '+error.response.status);
                    let refresh = this.getUserToken().refresh;
                    console.log(refresh);
                    if(statusCode=== 401) {
                        axios.post('http://127.0.0.1:8000/api/token/refresh/', {refresh:this.getUserToken().refresh })
                    .then(response => {
                        console.log(response.data.access);
                        axios.post('http://127.0.0.1:8000/sharesell/',this.state, {
                            headers:{
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${response.data.access}`
                            }
                    }).then(response => {
                            console.log('I am in good under bad'+response.status);
                            this.props.history.push('/books/');

                            console.log("request successful :  "+response.data);
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
    render() {
        const isLoggedIn = localStorage.getItem("isLoggedIn");

        return (
            <div>
                <Navbar isLoggedIn = {isLoggedIn}/>
                <MainDiv>

                    <ContentBorder>
                        <h2 >Sell Books?</h2>
                        <p>Provide your book details bellow and Sell!</p>

                        <FormDiv onSubmit={this.handleSubmit}>

                            <label>Thumbnail of Book</label>
                            <InputText
                                type="text"
                                name="thumbnail"
                                required
                                placeholder="Enter book cover url"
                                onChange={this.handleChange}
                                onClick={this.handleChange}/>
                            <label>Book Title</label>
                            <InputText
                                type="text"
                                name="title"
                                required
                                placeholder="Enter book title"
                                onChange={this.handleChange}
                                onClick={this.handleChange}/>

                            <label>Author Name</label>
                            <InputText
                                type="text"
                                name="author"
                                required
                                placeholder="Enter author name"
                                onChange={this.handleChange}
                                onClick={this.handleChange}/>
                            <label>ISBN Number</label>
                            <InputText
                                type="number"
                                name="isbn"
                                required
                                placeholder="Enter ISBN number"
                                onChange={this.handleChange}
                                onClick={this.handleChange}/>
                            <label>Category</label>
                            <InputText
                                type="text"
                                name="category"
                                required
                                placeholder="Enter books category"
                                onChange={this.handleChange}
                                onClick={this.handleChange}/>

                            <label>Book Price</label>
                            <InputText
                                type="number"
                                name="price"
                                required
                                placeholder="Enter book price in BDT"
                                onChange={this.handleChange}
                                onClick={this.handleChange}/>
                            <label>Book Description</label>
                            <TextArea
                                type="text"
                                name="description"
                                required
                                placeholder="Enter books description"
                                onChange={this.handleChange}
                                onClick={this.handleChange}/>

                            <StyledButton type={'submit'}>Submit</StyledButton>
                        </FormDiv>
                    </ContentBorder>
                </MainDiv>
            </div>
        )
    }
}
export default Sell
