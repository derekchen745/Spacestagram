import React, { useCallback } from "react";
import { styled } from "@mui/material/styles";
import {
  Typography,
  Grid,
  Container,
} from "@material-ui/core";
import useStyles from "./styles";
import PhotoCard from "./PhotoCard";
import { likedPhotos } from "./state";
import { useRecoilState } from "recoil";

const LikedPage = () => {
  const classes = useStyles();

  const [likedArray, setLikedPhotos] = useRecoilState(likedPhotos);

  const togglePhotoLikeCallback = useCallback(
    (togglePhoto) => {
      if (likedArray.find((photo) => photo.url === togglePhoto.url) != null) {
        // unliking photo
        setLikedPhotos(
          likedArray.filter((photo) => photo.url !== togglePhoto.url)
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
      return likedArray.find((p) => p.url === photo.url) != null;
    },
    [likedArray]
  );

  return (
    <Container className={classes.cardGrid} maxWidth="sm">
      <Grid container spacing={4}>
        <TitlePaper>
          <Typography variant="h4">Liked Photos</Typography>
        </TitlePaper>
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

export const TitlePaper = styled("div")({
  display: "inline-block",
  position: "relative",
  left: "50%",
  transform: "translateX(-50%)",
  padding: "8px 16px",
  marginBottom: "8px",
  marginTop: "8px",
  alignText: "center",
});
