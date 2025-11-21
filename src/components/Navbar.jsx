import { Link } from "react-router-dom";
import Logo from "../assets/Logo.jpg"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 bg-blue-800 text-white">
      <Link to="/" className="logo-area">
        <img src={Logo} alt="Institute Logo" className="logo" />
      </Link>

      <div className="flex gap-6">
        <a href="#home">Home</a>
        <a href="#courses">Courses</a>
        <a href="#gallery">Gallery</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact Us</a>

      </div>
    </nav>
  );
}
