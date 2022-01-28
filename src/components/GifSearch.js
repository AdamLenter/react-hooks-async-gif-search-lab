import React, { useState } from "react";

// the App component should render out the GifListContainer component
function GifSearch({ handleSearchTerm }) {
    const [searchTerm, setSearchTerm] = useState("");
    function onChangeSearchTerm(event) {
        setSearchTerm(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        handleSearchTerm(searchTerm);
    }

  return (
    <form onSubmit = {((e) => handleSubmit(e))}>
      <label>Enter a search term: </label>
      <input type = "text" value = {searchTerm} onChange = {(e)=>onChangeSearchTerm(e)} />
      <button>Find Gifs</button>
    </form>
  );
}

export default GifSearch;