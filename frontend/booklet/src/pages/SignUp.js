import React from 'react'
import styled from "styled-components";
import axios from 'axios';

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
`
const InputText = styled.input`
            height: 40px;
            solid #f6f6f6;
            text-align: center;
            margin-top:10px;
            margin-bottom: 20px;
            animation: input-field ease-in 2s;
`
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

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            first_name:'',
            last_name:'',
            email: '',
            username:'',
            password:'',
            password1:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {

        this.setState({
                [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        let email = data.get('email');
        let pass = data.get('password');
        //console.log(email+pass);
        //console.log(this.state);
        axios.post('http://127.0.0.1:8000/register/',this.state)
            .then(response => {
                    this.autoSignIn();

                console.log(response);
            }).catch(error => {
                console.log(error);
                alert("please fill up fields correctly");
            }
        )
    }

    getUserToken(){
        return JSON.parse(localStorage.getItem("userToken"));
    }


    autoSignIn(){
        const user = {
            username: this.state.username,
            password:this.state.password,
    };
        console.log(user.toString());
        axios.post('http://127.0.0.1:8000/api/token/', user)
            .then(response => {
                localStorage.setItem("userToken", JSON.stringify(response.data));
                localStorage.setItem("isLoggedIn", JSON.stringify(1));
                const usertoken =this.getUserToken().access;
                console.log(`my token   ${usertoken}`);
                this.props.history.push('/books/');
                //console.log(response.data.access);
            }).catch(error => {
                console.log(error);
                alert("please fill up fields correctly");
        })
    }
    render() {
        return (
        <div>
            <MainDiv>

                <ContentBorder>
                    <h2 >Sign-Up</h2>

                    <FormDiv onSubmit={this.handleSubmit}>

                        <label>First Name</label>
                        <InputText
                            type="text"
                            name="first_name"
                            required
                            placeholder="enter first name"
                            onChange={this.handleChange}
                            onClick={this.handleChange}/>
                        <label>Last Name</label>
                        <InputText
                            type="text"
                            name="last_name"
                            required
                            placeholder="enter user name"
                            onChange={this.handleChange}
                            onClick={this.handleChange}/>

                        <label>Username</label>
                        <InputText
                            type="text"
                            name="username"
                            required
                            placeholder="enter user name"
                            onChange={this.handleChange}
                            onClick={this.handleChange}/>
                            <label>Email</label>
                            <InputText
                                type="email"
                                name="email"
                                required
                                placeholder="enter your email"
                                onChange={this.handleChange}
                                onClick={this.handleChange}/>
                            <label>Password</label>
                        <InputText
                            type="password"
                            name="password"
                            required
                            placeholder="enter your password"
                            onChange={this.handleChange}
                            onClick={this.handleChange}/>
                        <label>Confirm password</label>
                        <InputText
                            type="password"
                            name="password1"
                            required
                            placeholder="password"
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
export default SignUp
