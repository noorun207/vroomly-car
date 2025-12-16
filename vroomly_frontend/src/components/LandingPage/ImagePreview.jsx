export default function ImagePreview({ images }) {
  if (!images || images.length === 0) return null;

  return (
    <div className="flex gap-2 mt-2 flex-wrap">
      {images.map((img, index) => (
        <img
          key={index}
          src={URL.createObjectURL(img)}
          alt="preview"
          className="h-16 w-24 rounded-lg object-cover"
        />
      ))}
    </div>
  );
}
