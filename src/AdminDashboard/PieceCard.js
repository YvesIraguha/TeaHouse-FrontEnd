import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import convertToHtml from "../utils/stringToHtml";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const MediaCard = ({
  createdAt,
  title,
  id,
  body,
  onDeletePiece,
  onEditPiece,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://picsum.photos/200"
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {convertToHtml(body.slice(0, 150))}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => onEditPiece(id)}>
          Edit
        </Button>
        <Button size="small" color="primary" onClick={() => onDeletePiece(id)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default MediaCard;
