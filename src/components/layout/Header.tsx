import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { navItems } from "../../config/navItems";
import { FaBars, FaRegHeart, FaRegUser } from "react-icons/fa";
import logo from "../../assets/logo.png";
import MobileMenu from "../layout/MobileMenu"; // 👈 импортируем
import { RiTelegram2Fill } from "react-icons/ri";

interface HeaderProps {
  isAuthenticated: boolean;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isAuthenticated, onLogout }) => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    onLogout();
    navigate("/");
  };

  return (
    <header className="p-3 md:p-4 lg:p-6 flex items-center justify-between lg:px-16 xl:px-32">
      <div className="flex items-center gap-2  lg:gap-6">
        <Link to="/" className="flex items-center flex-shrink-0">
          <img src={logo} alt="KeshOne Logo" className="h-8 md:h-10 lg:h-12" />
        </Link>

        <nav className="hidden md:flex md:gap-2 lg:gap-4">
          {navItems.map((item) => {
            if (item.authOnly && !isAuthenticated) return null;
            if (item.guestOnly && isAuthenticated) return null;
            return (
              <Link
                key={item.path}
                to={item.path}
                className="hover:text-pink-400 bg-white px-3 xl:px-4 xl:py-2  rounded-xl md:text-[10px] lg:text-sm xl:text-lg  text-center"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="hidden md:flex items-center gap-2">
        {!isAuthenticated && (
          <>
            <Link
              to="/likes"
              className="relative px-2 py-2 xl:px-4 bg-white rounded-xl hover:text-pink-400"
            >
              <FaRegHeart className="text-md xl:text-2xl" />
              <span className="absolute bottom-1 right-1 bg-pink-400 text-white text-[6px] font-bold rounded-full w-3 h-3 flex items-center justify-center xl:text-xs xl:w-4 xl:h-4 xl:right-2">
                3
              </span>
            </Link>

            <Link
              to="/profile"
              className="px-2 py-2 bg-white rounded-xl text-gray-500 hover:text-pink-400"
            >
              <FaRegUser className="text-md xl:text-2xl" />
            </Link>
            <Link
              to="/messages"
              className="px-2 py-2 bg-white rounded-xl text-gray-500 hover:text-pink-400"
            >
              <RiTelegram2Fill className="text-md xl:text-2xl" />
            </Link>

            <Link
              to="/add-anketa"
              className="text-white text-center text-sm bg-gradient-to-r from-[#9697FE] via-[#98A8FE] to-[#9AC0FF] py-2 px-3 rounded-2xl xl:text-lg"
            >
              Добавить Анкету
            </Link>
          </>
        )}
      </div>

      {/* Бургер-меню (мобилка) */}
      <button
        className="md:hidden text-2xl text-gray-700"
        onClick={() => setIsMobileMenuOpen(true)}
      >
        <FaBars />
      </button>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        isAuthenticated={isAuthenticated}
      />
    </header>
  );
};

export default Header;
