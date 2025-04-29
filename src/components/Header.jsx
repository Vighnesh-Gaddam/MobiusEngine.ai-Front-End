import { Link } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-4 mx-14 py-7 relative">
      <img src="/assets/images/Logo.png" alt="Logo" className="h-12" />

      <div className="lg:hidden xl:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
        >
          <Menu className="w-6 h-6 text-white" />
        </button>
      </div>

      <ul
        className={`lg:flex xl:flex gap-12 text-white text-lg font-medium text-center ${
          isMenuOpen
            ? "flex flex-col gap-6 absolute top-20 right-14 bg-[#022183] p-6 rounded-lg transition-all ease-in-out duration-300 z-50"
            : "hidden"
        }`}
      >
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/plans">Plans</Link></li>
        <li><Link to="/">Testimonials</Link></li>
        <li><Link to="/" className="hidden min-[1150px]:flex">Privacy Policy</Link></li>
        <li className="items-center gap-1 hidden xl:flex">
          <Link to="/" className="flex items-center gap-1">
            More
            <ChevronDown className="w-5 h-5 text-white font-bold" />
          </Link>
        </li>

        <li className="lg:hidden xl:hidden mt-6">
          <button className="text-[#022183] bg-white px-6 py-2 rounded-full text-xl font-medium w-full text-center">
            Get Started
          </button>
        </li>
      </ul>

      <button className="hidden lg:block xl:block text-[#022183] bg-white px-9 py-2 rounded-full text-xl font-medium  hover:bg-[#022183] hover:text-white">
        Get Started
      </button>
    </nav>
  );
};

export default Header;
