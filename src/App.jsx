import React from "react";
import { useRecoilState } from "recoil";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Like from "./Like";
import PhotoCard from "./PhotoCard";
import { photoAtom, dateAtom } from "./state";
import DateSearch from "./DateSearch";
import { TextField, Stack } from "@mui/material";
import { Outlet, Route, Routes, Link } from "react-router-dom";
import axios from "axios";

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
import { Box } from "@mui/system";
library.add(fab, faHeart);

const API_URL = "https://api.nasa.gov/planetary/apod";
const API_key = "IlLiEOOYhoMjH0if5W8OS2iiOmDZ6gbOEQxBtRkS";

// const photo1 = {
//   copyright: "Capture: Greg Turgeon Processing: Kiko Fairbairn",
//   date: "2022-05-17",
//   explanation:
//     "Astronomers turn detectives when trying to figure out the cause of startling sights like NGC 1316.  Investigations indicate that NGC 1316 is an enormous elliptical galaxy that started, about 100 million years ago, to devour a smaller spiral galaxy neighbor, NGC 1317, just on the upper right. Supporting evidence includes the dark dust lanes characteristic of a spiral galaxy, and faint swirls and shells of stars and gas visible in this wide and deep image. One thing that >remains unexplained is the unusually small globular star clusters, seen as faint dots on the image. Most elliptical galaxies have more and brighter globular clusters than NGC 1316.  Yet the observed globulars are too old to have been created by the recent spiral collision.  One hypothesis is that these globulars survive from an even earlier galaxy that was subsumed into NGC 1316. Another surprising attribute of NGC 1316, also known as Fornax A, is its giant lobes of gas that glow brightly in radio waves.",
//   hdurl: "https://apod.nasa.gov/apod/image/2205/Ngc1316_Turgeon_1300.jpg",
//   media_type: "image",
//   service_version: "v1",
//   title: "NGC 1316: After Galaxies Collide",
//   url: "https://apod.nasa.gov/apod/image/2205/Ngc1316_Turgeon_960.jpg",
// };

const App = () => {
  const classes = useStyles();

  const [photo, setPhoto] = useRecoilState(photoAtom);
  const [date, setDate] = useRecoilState(dateAtom);
  console.log(date);

  const searchPhotos = async () => {
    const end_date = new Date().toLocaleDateString("en-CA", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });

    const start_date = new Date(
      Date.parse(new Date()) - 864000000 //864000000 is the amount of milliseconds in 10 days
    ).toLocaleDateString("en-CA", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });

    // const date = "2022-05-17";
    // const start_date = "2022-05-15";
    // const end_date = "2022-05-18";
    // const response = await fetch(`${API_URL}?api_key=${API_key}&date=${date}`);

    const response = await fetch(
      date == null
        ? `${API_URL}?api_key=${API_key}&start_date=${start_date}&end_date=${end_date}`
        : `${API_URL}?api_key=${API_key}&date=${date}`
    );

    //&end_date${end_date}

    const data = await response.json();
    // const response = await axios.get(API_URL, {
    //   api_key: API_key,
    //   date: "2022-05-17",
    // });

    setPhoto(data);
  };

  useEffect(() => {
    searchPhotos();
  }, [date]);

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
          <TextField
            className={classes.searchBar}
            id="date"
            label="Search By Date"
            type="date"
            defaultValue="2022-01-01"
            size="small"
            // sx={{
            //   width: 200,
            // }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setDate(e.target.value)}
          />
        </Toolbar>
      </AppBar>

      <main>
        <Container className={classes.cardGrid} maxWidth="sm">
          {photo?.length > 0 ? (
            <div>
              {photo
                .slice()
                .reverse()
                .map((photo) => (
                  <Grid container spacing={4}>
                    <Grid item key={photo}>
                      <PhotoCard photo={photo} />
                    </Grid>
                  </Grid>
                ))}
            </div>
          ) : (
            <div>
              <PhotoCard photo={photo} />
              {/* <h2>Why no work</h2> */}
            </div>
          )}
        </Container>
      </main>

      {/* <footer className={classes.footer}>
        <Typography variant="h6" align="center">
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          Something here to give the footer a purpose
        </Typography>
      </footer> */}
    </>
  );
};

export default App;
