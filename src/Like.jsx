import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";

const Like = () => {
  const [liked, setLiked] = useState(false);

  const toggle = () => {
    setLiked(!liked);
  };

  return (
    <div>
      <IconButton onClick={() => toggle()}>
        {liked === false ? (
          <FavoriteBorderIcon />
        ) : (
          <FavoriteIcon color="error" />
        )}
      </IconButton>
    </div>
  );
};

export default Like;
