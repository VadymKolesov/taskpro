import { useState } from 'react';

const ImageUploader = ({ setImageURL }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
      setImageURL(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      {image && (
        <div>
          <img src={image} alt="Selected" style={{ width: '68px', height: '68px' }} />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
