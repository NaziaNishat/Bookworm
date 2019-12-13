import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {blue, red} from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import styled from "styled-components";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    margin:15
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
 const AttributeText = styled.p`
    color = "#0000FF";
 `;

export default function RecipeReviewCard(props) {
  const {book} = props;
  const { title, author, isbn, thumbnail, category, availability, description} = book;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card className={classes.card}>
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
      <CardMedia
        className={classes.media}
        image={thumbnail}
        title={author}
      />
      <CardContent>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
        <Typography variant="body2" component="p">
          {author}
        </Typography>
        <AttributeText >
          {category}
        </AttributeText>
        {(availability) ? (<Typography variant="body2" color="textSecondary" component="p">
          Available
        </Typography>)
  : (<Typography variant="body2" color="textSecondary" component="p">
              Not Available
            </Typography>)}

      </CardContent>

    </Card>
  );
}
