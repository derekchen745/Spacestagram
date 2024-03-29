import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import PhotoCard from "./PhotoCard";
import { photoAtom, dateAtom, likedPhotos } from "./state";
import {
  Typography,
  Grid,
  Container,
} from "@material-ui/core";
import useStyles from "./styles";
library.add(fab, faHeart);

const API_URL = "https://api.nasa.gov/planetary/apod";
const API_key = "IlLiEOOYhoMjH0if5W8OS2iiOmDZ6gbOEQxBtRkS";

const Gallery = () => {
  const classes = useStyles();

  const [photo, setPhoto] = useRecoilState(photoAtom);
  const [date, setDate] = useRecoilState(dateAtom);
  const [likedArray, setLikedPhotos] = useRecoilState(likedPhotos);

  const searchPhotos = async () => {
    const end_date = new Date().toLocaleDateString("en-CA", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });

    const start_date = new Date(
      Date.parse(new Date()) - 864000000 //864000000 is the amount of milliseconds in 10 days 100 days: 8640000000
    ).toLocaleDateString("en-CA", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });

    const response = await fetch(
      date == null
        ? `${API_URL}?api_key=${API_key}&start_date=${start_date}&end_date=${end_date}`
        : `${API_URL}?api_key=${API_key}&date=${date}`
    );

    const data = await response.json();
    // const response = await axios.get(API_URL, {
    //   api_key: API_key,
    //   date: "2022-05-17",
    // });

    console.log(data);

    setPhoto(data);
  };

  const togglePhotoLikeCallback = useCallback(
    (photo) => {
      if (likedArray.find((p) => p.url === photo.url) != null) {
        // unliking photo
        setLikedPhotos(likedArray.filter((p) => p.url !== photo.url));
      } else {
        // liking photo
        setLikedPhotos([...likedArray, photo]);
      }
    },
    [likedArray, setLikedPhotos]
  );

  const findLikedPhoto = useCallback(
    (photo) => {
      console.log(
        photo,
        likedArray.find((p) => p.url === photo.url)
      );
      return likedArray.find((p) => p.url === photo.url) != null;
    },
    [likedArray]
  );

  useEffect(() => {
    searchPhotos();
  }, [date]);

  return (
    <Container className={classes.cardGrid} maxWidth="sm">
      {photo ? (
        photo.length > 0 ? (
          <div>
            {photo
              .slice()
              .reverse()
              .map((photo) => (
                <Grid container spacing={4}>
                  <Grid item key={photo}>
                    <PhotoCard
                      photo={photo}
                      onToggleLike={togglePhotoLikeCallback}
                      liked={findLikedPhoto(photo)}
                    />
                  </Grid>
                </Grid>
              ))}
          </div>
        ) : (
          <PhotoCard
            photo={photo}
            onToggleLike={togglePhotoLikeCallback}
            liked={findLikedPhoto(photo)}
          />
        )
      ) : (
        <div>
          <Typography variant="h6" align="center">
            Loading images...
          </Typography>
        </div>
      )}
    </Container>
  );
};

export default Gallery;
