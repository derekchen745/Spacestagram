import React from "react";
import { useRecoilState } from "recoil";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  Typography,
  AppBar,
  Button,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@material-ui/core";
import useStyles from "./styles";
import DateSearch from "./DateSearch";
import { TextField } from "@mui/material";
import { photoAtom, dateAtom } from "./state";
import {
  Outlet,
  Route,
  Routes,
  Link,
  BrowserRouter,
  useNavigate,
} from "react-router-dom";

library.add(fab);

const NavBar = () => {
  const [date, setDate] = useRecoilState(dateAtom);
  const classes = useStyles();
  const navigate = useNavigate();

  const handleClick1 = () => {
    navigate("/liked");
  };

  const handleClick2 = () => {
    navigate("/");
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar className={classes.navbar}>
          <div
            className={classes.homeButton}
            onClick={() => {
              setDate(null);
              handleClick2();
            }}
          >
            <FontAwesomeIcon
              icon={["fab", "instagram"]}
              className={classes.icon}
            />
            <Typography variant="h5">Spacestagram</Typography>
          </div>
          <div className={classes.right}>
            <FavoriteBorderIcon
              onClick={() => handleClick1()}
              className={classes.likedPage}
              sx={{
                fontSize: "30px",
              }}
            />

            <div className={classes.searchBar}>
              <TextField
                id="date"
                label="Search By Date"
                type="date"
                defaultValue="2022-01-01"
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
