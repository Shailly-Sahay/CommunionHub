import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black/60 relative text-white py-6 section-pd">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-between gap-12 sm:gap-4">
        {/* Left - Logo & Copyright */}
        <div className="text-left">
          <h3 className="header font-bold">CommunionHub</h3>
          <p className="text-sm text-gray-400">© 2025 All Rights Reserved</p>
        </div>

        {/* Center - Navigation Links */}
        <div className="flex flex-wrap sm:justify-center  gap-6 small-font">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/events" className="hover:text-gray-300">
            Events
          </Link>
          <Link to="/" className="hover:text-gray-300">
            About
          </Link>
          <Link to="/conact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>

        {/* Right - Social Icons */}
        <div className="flex gap-4  md:justify-end">
          <Link to="#" className="hover:text-gray-300">
            <Facebook size={20} />
          </Link>
          <Link to="#" className="hover:text-gray-300">
            <Instagram size={20} />
          </Link>
          <Link to="#" className="hover:text-gray-300">
            <Twitter size={20} />
          </Link>
          <Link to="#" className="hover:text-gray-300">
            <Linkedin size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
