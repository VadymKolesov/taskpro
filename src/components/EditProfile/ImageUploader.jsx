
const ImageUploader = () => {

  const handleImageChange = () => {
    console.log("Hello");
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
    
        <div>
          <img src={image} alt="Selected" className={} />
        </div>
      
    </div>
  )
}
export default ImageUploader;
