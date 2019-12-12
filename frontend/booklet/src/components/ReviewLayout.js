import React from "react";
import styled from "styled-components";

const Div = styled.div`
    display: flex;
    margin-top:10px;
	flex-direction: column;
	width: 400px;
	height: auto;
    background: linear-gradient(177.46deg, #DAEBE5 0%, #F8F4D5 100%);
`;

const ReviewHeaderDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const Text = styled.span`
    width: auto;
    height: auto;
    color: #000000;
    margin-top: 20px;
    margin-bottom: 10px;
    font-family: Rubik;	
    font-size: 24px;	
    font-weight: 500;	
    line-height: 28px;
`;

const QuoteText = styled.span`
    width: auto;
    height: auto;
    margin-left: 50px;
    margin-bottom: 20px;
    font-style: italic;
    color: #000000;
    font-family: Rubik;	
    font-size: 20px;	
    font-weight: 500;	
    line-height: 28px;
`;

const ReviewLayout = props => {
    const {reviewData} = props;
    const {ratings, rate_reviewer, review} = reviewData;
    return(
        <Div>
            <ReviewHeaderDiv>
                <Text>User name {rate_reviewer}</Text>
                <Text>---- {ratings}</Text>
            </ReviewHeaderDiv>
            <QuoteText>{`"${review}"`}</QuoteText>

        </Div>
    )
};

export default ReviewLayout;
