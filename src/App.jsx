import React from "react";
import { useRecoilState } from "recoil";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import Like from "./Like";
import PhotoCard from "./PhotoCard";
import { photoAtom, dateAtom } from "./state";
import DateSearch from "./DateSearch";
import { TextField, Stack } from "@mui/material";
import { Outlet, Route, Routes, Link, BrowserRouter } from "react-router-dom";
import axios from "axios";
import NavBar from "./NavBar";
import Gallery from "./Gallery";
import LikedPage from "./LikedPage";

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
library.add(fab);

// const API_URL = "https://api.nasa.gov/planetary/apod";
// const API_key = "IlLiEOOYhoMjH0if5W8OS2iiOmDZ6gbOEQxBtRkS";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/liked" element={<LikedPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
