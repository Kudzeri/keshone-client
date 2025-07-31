// components/layout/MobileMenu.tsx

import React from "react";
import { Link } from "react-router-dom";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { RiTelegram2Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { navItems } from "../../config/navItems";
import logo from "../../assets/logo.png";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isAuthenticated: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  isAuthenticated,
}) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-full bg-[#F9F9F9] shadow-lg z-50 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-4">
        <Link onClick={onClose} to="/" className="flex items-center">
          <img src={logo} alt="KeshOne Logo" className="h-10" />
        </Link>
        <div className="flex justify-end p-4">
          <button onClick={onClose}>
            <IoClose className="text-2xl text-gray-600" />
          </button>
        </div>
      </div>

      <h1 className="py-4 px-4 font-bold text-2xl">Меню</h1>

      <nav className="flex flex-col px-6 gap-2">
        {navItems.map((item) => {
          if (item.authOnly && !isAuthenticated) return null;
          if (item.guestOnly && isAuthenticated) return null;
          return (
            <Link
              onClick={onClose}
              key={item.path}
              to={item.path}
              className="hover:text-pink-400 bg-white px-4 py-2 rounded-xl"
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="px-6 py-4 flex flex-col gap-6 items-center my-4">
        {!isAuthenticated && (
          <>
            <div className="flex gap-6 items-center justify-center">
              <Link
                to="/likes"
                className="relative flex items-center gap-2 text-gray-800 hover:text-pink-400"
                onClick={onClose}
              >
                <FaRegHeart className="text-xl" />
                <span className="absolute left-3 top-2 bg-pink-400 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  3
                </span>
              </Link>

              <Link
                to="/profile"
                className="flex items-center gap-2 text-gray-800 hover:text-pink-400"
                onClick={onClose}
              >
                <FaRegUser className="text-xl" />
              </Link>

              <Link
                to="/messages"
                className="flex items-center gap-2 text-gray-800 hover:text-pink-400"
                onClick={onClose}
              >
                <RiTelegram2Fill className="text-xl" />
              </Link>
            </div>

            <Link
              to="/add-anketa"
              onClick={onClose}
              className="w-full text-white text-center bg-gradient-to-r from-[#9697FE] via-[#98A8FE] to-[#9AC0FF] py-3 px-4 rounded-2xl"
            >
              Добавить Анкету
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
