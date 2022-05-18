import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";

// class Like extends React.Component {
//   state = { liked: false };

//   toggle = () => {
//     var likedLocal = this.state.liked;
//     likedLocal = !likedLocal;
//     this.setState({ liked: likedLocal });
//   };

//   render() {
//     return (
//       <div>
//         {/* <IconButton
//           color={this.state.currentButton === 0 ? "primary" : "default"}
//           onClick={() => this.onButtonClicked(0)}
//         >
//           <FavoriteBorderIcon />
//         </IconButton> */}
//         <IconButton onClick={() => this.toggle()}>
//           {this.state.liked === false ? (
//             <FavoriteBorderIcon />
//           ) : (
//             <FavoriteIcon color="error" />
//           )}
//         </IconButton>
//       </div>
//     );
//   }
// }

const Like = () => {
  const [liked, setLiked] = useState(false);

  const toggle = () => {
    setLiked(!liked);
  };

  return (
    <div>
      {/* <IconButton
            color={this.state.currentButton === 0 ? "primary" : "default"}
            onClick={() => this.onButtonClicked(0)}
          >
            <FavoriteBorderIcon />
          </IconButton> */}
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
