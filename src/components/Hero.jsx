import Institute from "../assets/A-One.jpg";

export default function Hero() {
  return (
    <section
      className="relative w-full h-[85vh] bg-cover bg-center scroll-mt-24" id="home"
      style={{ backgroundImage: `url(${Institute})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full pl-10 md:pl-20 text-white max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          A-One Classes, Kota
        </h1>

        <p className="text-lg md:text-xl mb-6 font-light">
          Kota’s trusted coaching institute for strong academic foundation and smart learning.
        </p>

        <button className="bg-blue-600 px-6 py-3 rounded-lg text-white font-semibold hover:bg-blue-700 shadow-lg w-fit cursor-pointer">
          Contact Us
        </button>
      </div>
    </section>
  );
}
