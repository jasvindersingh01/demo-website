import img1 from "../assets/gallery/Image1.avif"
import img2 from "../assets/gallery/Image2.webp"
import img3 from "../assets/gallery/Image3.avif"
import img4 from "../assets/gallery/Image4.webp"
import img5 from "../assets/gallery/Image5.avif"
import img6 from "../assets/gallery/Image6.avif"

export default function Gallery() {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6
  ];

  return (
    <section className="py-16 bg-white scroll-mt-15" id="gallery">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-700">Gallery</h2>
        <p className="text-gray-600 mt-2">
          A glimpse of A-One Classes campus, classrooms and learning environment
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-6 md:px-20">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-xl shadow">
            <img
              src={src}
              alt="Gallery"
              className="w-full h-70 object-cover hover:scale-110 transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
