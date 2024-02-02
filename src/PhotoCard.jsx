import React from "react";
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
} from "@material-ui/core";
import useStyles from "./styles";
import Like from "./Like";

const PhotoCard = ({ photo, onToggleLike, liked }) => {
  const classes = useStyles();
  console.log(photo?.media_type)
  return (
    <Grid item key={photo}>
      <Card className={classes.card}>
        <CardContent className={classes.cardHeader}>
          <Typography variant="h5">{photo?.title ?? ""}</Typography>
          <Typography variant="subtitle1">{photo?.date ?? ""}</Typography>
        </CardContent>

        {photo?.media_type === "image" ? (
          <CardMedia className={classes.cardMedia} image={photo.url} />
        ) : (
          <Typography align='center' sx={{ justifyContent: 'center', alignItems: 'center' }}>Cannot Display Video</Typography>
        )}
        <CardContent className={classes.cardExplaination}>
          <Typography>{photo?.explanation ?? ""}</Typography>
          <Typography variant='caption' justify="left">
            Copyright: {photo?.copyright ?? ""}
          </Typography>
        </CardContent>

        <CardActions>
          <Like onToggleLike={onToggleLike} photo={photo} liked={liked} />
        </CardActions>
      </Card>
    </Grid>
  );
};

export default PhotoCard;
