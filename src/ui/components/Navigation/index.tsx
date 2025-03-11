import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../Button";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex fixed top-0 left-0 w-full z-50 items-center section-pd justify-between py-12 bg-transparent text-white">
      {/* Left - Logo */}
      <Link to="/">
        <h3 className="tracking-tight text-white">CommunionHub</h3>
      </Link>

      {/* Show button only on desktop */}
      <div className="hidden md:flex">
        <Button>Explore Events</Button>
      </div>

      {/* Right - Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden focus:outline-none"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu - Animated Dropdown */}
      {menuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-transparent backdrop-blur-md flex flex-col items-center justify-center gap-6 z-10 transition-all duration-300">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-white"
          >
            <X size={32} />
          </button>

          {/* Show button only in mobile menu */}
          <Button>Explore Events</Button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
