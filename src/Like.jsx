import React from "react";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import { FavoriteIcon, FavoriteBorderIcon } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";

const Like = () => {
  const [liked, setLiked] = useState(false);

  const toggle = () => {
    setLiked(!liked);
  };

  return (
    <IconButton onClick={() => toggle()}>
      {liked === false ? (
        <FavoriteBorderIcon />
      ) : (
        <FavoriteIcon color="error" />
      )}
    </IconButton>
  );
};

export default Like;
