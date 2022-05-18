import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import Like from "./Like";

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
library.add(fab, faHeart);

const API_URL =
  "https://api.nasa.gov/planetary/apod?api_key=IlLiEOOYhoMjH0if5W8OS2iiOmDZ6gbOEQxBtRkS";

const photo1 = {
  copyright: "Capture: Greg Turgeon Processing: Kiko Fairbairn",
  date: "2022-05-17",
  explanation:
    "Astronomers turn detectives when trying to figure out the cause of startling sights like NGC 1316.  Investigations indicate that NGC 1316 is an enormous elliptical galaxy that started, about 100 million years ago, to devour a smaller spiral galaxy neighbor, NGC 1317, just on the upper right. Supporting evidence includes the dark dust lanes characteristic of a spiral galaxy, and faint swirls and shells of stars and gas visible in this wide and deep image. One thing that >remains unexplained is the unusually small globular star clusters, seen as faint dots on the image. Most elliptical galaxies have more and brighter globular clusters than NGC 1316.  Yet the observed globulars are too old to have been created by the recent spiral collision.  One hypothesis is that these globulars survive from an even earlier galaxy that was subsumed into NGC 1316. Another surprising attribute of NGC 1316, also known as Fornax A, is its giant lobes of gas that glow brightly in radio waves.",
  hdurl: "https://apod.nasa.gov/apod/image/2205/Ngc1316_Turgeon_1300.jpg",
  media_type: "image",
  service_version: "v1",
  title: "NGC 1316: After Galaxies Collide",
  url: "https://apod.nasa.gov/apod/image/2205/Ngc1316_Turgeon_960.jpg",
};

const App = () => {
  const classes = useStyles();

  const searchPhotos = async () => {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    searchPhotos();
  }, []);

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar className={classes.navbar}>
          <FontAwesomeIcon
            icon={["fab", "instagram"]}
            className={classes.icon}
          />
          <Typography variant="h5">Spacestagram</Typography>
        </Toolbar>
      </AppBar>

      <main>
        {/* <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Spacestagram
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Hello everyone. This is a photo album and I'm trying to make this
              sentence as long as possible so we can see the way it looks on
              screen.
            </Typography>
            <div className={classes.button}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    See my photos
                  </Button>
                </Grid>

                <Grid item>
                  <Button variant="contained" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div> */}

        <Container className={classes.cardGrid} maxWidth="sm">
          <Grid>
            <Card className={classes.card}>
              {/* className={classes.cardTitle} */}
              <CardContent className={classes.cardHeader}>
                <Typography variant="h5">{photo1.title}</Typography>
                <Typography variant="subtitle">{photo1.date}</Typography>
              </CardContent>
              <CardMedia className={classes.cardMedia} image={photo1.hdurl} />
              <CardContent className={classes.cardExplaination}>
                <Typography>{photo1.explanation}</Typography>
                <Typography justify="left">{photo1.copyright}</Typography>
              </CardContent>
              <CardActions>
                <Like />
                {/* <IconButton
                  aria-label="like"
                  size="medium"
                  onClick={() => {
                    <FavoriteIcon />;
                  }}
                >
                  <FavoriteBorderIcon className={classes.like} />
                </IconButton> */}

                {/* <Button size="small" color="primary">
                  Edit
                </Button> */}
              </CardActions>
            </Card>
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center">
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          Something here to give the footer a purpose
        </Typography>
      </footer>
    </>
  );
};

export default App;
