import React, { useEffect, useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [gifs, setGifs] = useState([]);
  const [gifsLoaded, setGifsLoaded] = useState(false);
  const [termToSearch, setTermToSearch] = useState("");

  function handleSearchTerm(search) {
      setTermToSearch(search);
  }

  useEffect(()=> {
      let fetchURL;

      if(termToSearch === "") {
          fetchURL = "https://api.giphy.com/v1/gifs/search?&api_key=wOD7RAlwQjhGJPT5SfLVH39Qf5KTqr76&rating=g";
      }
      else
        {
        fetchURL = `https://api.giphy.com/v1/gifs/search?q=${termToSearch}&api_key=wOD7RAlwQjhGJPT5SfLVH39Qf5KTqr76&rating=g`
        }
      fetch(fetchURL)
        .then((r)=>r.json())
        .then((gifLists) => setGifs(gifLists))
        .then(() => setGifsLoaded(true))
        }, [termToSearch])

  let firstThreeGifs = [];

  if(gifsLoaded) {
      firstThreeGifs = gifs.data.slice(0, 3);
  }
  
  return (
    <div>
    <GifSearch handleSearchTerm = {handleSearchTerm} />
      <GifList gifs = {firstThreeGifs} />
    </div>
  );
}

export default GifListContainer;