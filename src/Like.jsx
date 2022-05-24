import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { photoAtom, likedAtom } from "./state";

const Like = ({ liked, photo, onToggleLike }) => {
  const handleLikeToggle = () => {
    onToggleLike(photo);
  };

  return (
    <IconButton onClick={handleLikeToggle}>
      {liked === false ? (
        <FavoriteBorderIcon />
      ) : (
        <FavoriteIcon color="error" />
      )}
    </IconButton>
  );
};

export default Like;
