import { useState } from "react";

function ImageResizer() {
  const [file, setFile] = useState(null);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const handleImageResize = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target.result;
      img.onload = () => {
        const { width, height } = img;
        canvas.width = width / 2;
        canvas.height = height / 2;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const resizedImage = canvas.toDataURL("image/jpeg", 0.8);
        console.log(resizedImage);
        // do something with resized image
      };
    };
  };

  return (
    <div>
      <input type="file" onChange={handleFileInputChange} />
      <button onClick={handleImageResize}>Resize Image</button>
      <canvas id="canvas"></canvas>
    </div>
  );
}

export default ImageResizer;
