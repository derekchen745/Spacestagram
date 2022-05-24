import React, { useCallback } from "react";
import {
  Typography,
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@material-ui/core";
import useStyles from "./styles";
import Like from "./Like";
import PhotoCard from "./PhotoCard";
import { likedPhotos } from "./state";
import { useRecoilState } from "recoil";

const LikedPage = () => {
  const classes = useStyles();

  const [likedArray, setLikedPhotos] = useRecoilState(likedPhotos);

  const togglePhotoLikeCallback = useCallback(
    (togglePhoto) => {
      if (likedArray.find((photo) => photo.url == togglePhoto.url) != null) {
        // unliking photo
        setLikedPhotos(
          likedArray.filter((photo) => photo.url != togglePhoto.url)
        );
      } else {
        // liking photo
        setLikedPhotos([...likedArray, togglePhoto]);
      }
    },
    [likedArray, setLikedPhotos]
  );

  const findLikedPhoto = useCallback(
    (photo) => {
      return likedArray.find((p) => p.url == photo.url) != null;
    },
    [likedArray]
  );

  return (
    <Container className={classes.cardGrid} maxWidth="sm">
      <Grid>
        <Card className={classes.card}>
          <CardContent className={classes.cardHeader}>
            <Typography variant="h5">
              These are the photos that you've liked
            </Typography>
          </CardContent>
        </Card>
        {likedArray.map((photo) => (
          <Grid item>
            <PhotoCard
              photo={photo}
              onToggleLike={togglePhotoLikeCallback}
              liked={findLikedPhoto(photo)}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default LikedPage;
