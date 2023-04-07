import React, { useState } from "react";
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.css";

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [cropper, setCropper] = useState(null);

  const handleFileInputChange = (e) => {
    e.preventDefault();
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setImage(fileReader.result);
    };
    fileReader.readAsDataURL(e.target.files[0]);
  };

  const handleCrop = () => {
    const canvas = cropper.getCroppedCanvas();
    canvas.toBlob((blob) => {
      console.log(blob);
    });
  };

  return (
    <div>
      <input type="file" onChange={handleFileInputChange} />
      {image && (
        <Cropper
          src={image}
          initialAspectRatio={1}
          guides={false}
          viewMode={1}
          minCropBoxWidth={200}
          minCropBoxHeight={200}
          background={false}
          responsive={true}
          autoCropArea={1}
          checkOrientation={false}
          onInitialized={(instance) => {
            setCropper(instance);
          }}
        />
      )}
      <button onClick={handleCrop}>Crop</button>
    </div>
  );
};

export default ImageUpload;
