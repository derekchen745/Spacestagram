import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  navbar: {
    color: "#000",
    backgroundColor: theme.palette.background.paper,
  },

  container: {
    // backgroundColor: theme.palette.background.paper,
    paddingTop: "10px",
    // padding: theme.spacing(1, 0, 6),
  },

  icon: {
    marginRight: "10px",
    height: "30px",
    // color: "#000",
  },

  cardGrid: {
    padding: "20px 0",
    height: "100vh",
  },

  // card: {
  //   height: "100%",
  //   display: "flex",
  //   flexDirection: "column",
  // },

  cardHeader: {
    paddingBottom: "10px",
  },

  cardMedia: {
    paddingTop: "56.25%", //16:9
  },

  cardExplaination: {
    paddingBottom: "0px",
  },

  like: {
    color: "#000",
  },

  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: "0px",
    marginTop: "calc(5% + 60px)",
    bottom: 0,
    // display: "flex",
    // flexDirection: "column",
    // justify: "center",
    // padding: "10px 0",
    // position: "fixed",
  },
}));

export default useStyles;