import SearchBar from "./components/SearchBar";
import SearchImages from "./api";
import ImageList from "./components/ImageList";
import { useEffect, useState } from "react";

function App() {

  const [images, setImages] = useState([]);

  useEffect(() => {
    onSubmit('Cars');
  }, [])

  const onSubmit = async (term) => {
    const imageResults = await SearchImages(term);
    setImages(imageResults);
  }
  return (
    <div>
      <div className="header_container">
      <div className="logo_container">
        <h1 className="logo">Z</h1>
        <h2>Photo Search</h2>
      </div>
        <SearchBar handleSubmit={onSubmit} />
      </div>
      <ImageList images = {images} />
      </div>
  
  )
}

export default App
