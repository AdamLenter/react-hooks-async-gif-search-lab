import React from "react";

// the App component should render out the GifListContainer component
function GifList({ gifs }) {
  
  return (
    <ul>
      {gifs.map((gif)=><li key = {gif.id}><img src = {gif.images.preview_gif.url} alt = {gif.title}/></li>)}
    </ul>
  );
}

export default GifList;