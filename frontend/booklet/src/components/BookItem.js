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
        maxWidth: 700,
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
    flex-direction: row;
    margin: 10px;
`;
const ImageDiv=styled.img`
    width:200px;
    height: 300px;
`

export default function BookItem(props) {
    const {book, onBookItemClick} = props;
    const { title, id, author, isbn, thumbnail, category, availability} = book;
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    function handleExpandClick() {
        setExpanded(!expanded);
    }

    return (
        <Card onClick = {()=> onBookItemClick(id)} className={classes.card}>
            <CardDiv>
                <ImageDiv src = {thumbnail} alt="Smiley face"/>
                <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        B
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={title}
                subheader={isbn}
            />
            {/*<CardMedia*/}
            {/*    className={classes.media}*/}
            {/*    image={thumbnail}*/}
            {/*    title={author}*/}
            {/*/>*/}
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    The book is basically written ver a boy who like adventures.
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {category}
                </Typography>
                {(availability) ? (<Typography variant="body2" color="textSecondary" component="p">
                        Available
                    </Typography>)
                    : (<Typography variant="body2" color="textSecondary" component="p">
                        Not Available
                    </Typography>)}

            </CardContent>
            </CardDiv>


        </Card>
    );
}
