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
      <div>
        <h2>Zabulon Photo Search</h2>
      </div>
      <SearchBar handleSubmit={onSubmit} />
      <ImageList images = {images} />
      </div>
  
  )
}

export default App
