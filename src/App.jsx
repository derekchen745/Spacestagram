import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import Gallery from "./Gallery";
import LikedPage from "./LikedPage";

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
