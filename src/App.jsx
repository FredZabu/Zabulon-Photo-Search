import SearchBar from "./components/SearchBar";
import SearchImages from "./api";
import ImageList from "./components/ImageList";
import { useState } from "react";

function App() {

  const [images, setImages] = useState([]);

  const onSubmit = async (term) => {
    const imageResults = await SearchImages(term);
    setImages(imageResults);
  }
  return (
    <div>
      <SearchBar handleSubmit={onSubmit} />
      <ImageList images = {images} />
      </div>
  
  )
}

export default App
