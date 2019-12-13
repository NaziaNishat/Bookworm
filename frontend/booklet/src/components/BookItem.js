import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import styled from "styled-components";

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 800,
        marginBottom: 20,
        cursor: 'pointer'

    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

const CardDiv = styled.div`
    display:flex;
    width: 800px;
    flex-direction: row;
    margin: 10px;
`;
const BookdetailsDiv = styled.div `
    display: flex;
    flex-direction: Column;
    margin: 10px;
`
const ImageDiv=styled.img`
    width:250px;
    height: 330px;
    margin: 10px;
`;

export default function BookItem(props) {
    const {book, onBookItemClick} = props;
    const { title, id, description,author, isbn, thumbnail, category, availability,type} = book;
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    function handleExpandClick() {
        setExpanded(!expanded);
    }
    return (
        <Card onClick = {()=> onBookItemClick(id)} className={classes.card}>
            <CardDiv>
                <ImageDiv src = {thumbnail} alt="Smiley face"/>
                <BookdetailsDiv>
                    <CardHeader
                        title={title}
                        subheader={isbn}/>

                    <CardContent>
                    <Typography variant="body2" color="black" component="p">
                     <h4>Author : {author}</h4>
                    </Typography>
                        <Typography variant="body2" color="black" component="p">
                            {description}
                        </Typography>
                        <Typography variant="body2" color="black" component="p">
                        <p>Category : {category}</p>
                        </Typography>
                        <Typography variant="body2" color="black" component="p">
                        <p>Type : {type}</p>
                        </Typography>
                        {(availability) ? (<Typography variant="body2" color="black" component="p">
                                Available
                            </Typography>)
                            : (<Typography variant="body2" color="Brown" component="p">
                                Not Available
                            </Typography>)}

                    </CardContent>
                </BookdetailsDiv>

            {/*<CardMedia*/}
            {/*    className={classes.media}*/}
            {/*    image={thumbnail}*/}
            {/*    title={author}*/}
            {/*/>*/}

            </CardDiv>


        </Card>
    );
}
