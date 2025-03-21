import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import GlowingButton from "../GlowingButton";
import { useApp } from "../../../hooks/useApp";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isHomePage } = useApp();

  return (
    <nav className="flex fixed top-0 left-0 w-full z-40 items-center bg-black/50 section-pd justify-between py-8 md:py-12  text-white">
      {/* Left - Logo */}
      <Link to="/">
        <h3 className="tracking-tight text-white header">CommunionHub</h3>
      </Link>

      {/* Show button only on desktop */}
      <div className="hidden md:flex">
        {isHomePage ? (
          <GlowingButton text="Add Events" href="/events" />
        ) : (
          <GlowingButton text="Home Page" href="/" />
        )}
      </div>

      {/* Right - Mobile Menu GlowingButton */}
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
          {isHomePage ? (
            <GlowingButton text="Add Events" href="/events" />
          ) : (
            <GlowingButton text="Home Page" href="/" />
          )}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
