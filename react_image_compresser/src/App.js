import React, { useState } from "react";
import "./App.css";
import ImageUpload from "./component/ImageCrop";
import ImageResize from "./component/ImageResize";
import ImageResizer from "./component/Resize";

function App() {
  const [imageToResize, setImageToResize] = useState(undefined);
  const [resizedImage, setResizedImage] = useState(undefined);

  const onUploadFile = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setImageToResize(event.target.files[0]);
    }
  };

  return (
    <>
      <div className="app">
        <h1>Image Resizer</h1>
        <p>Resize your image by 50%</p>
        <input type="file" accept="image/*" onChange={onUploadFile} />
        <div>
          <ImageResize
            imageToResize={imageToResize}
            onImageResized={(resizedImage) => setResizedImage(resizedImage)}
          />
        </div>
        {resizedImage && (
          <div>
            <h2>Resized Image</h2>
            <img alt="Resize Image" src={resizedImage} />
          </div>
        )}
      </div>
      <ImageUpload />
      <ImageResizer />
    </>
  );
}

export default App;
