import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { navItems } from "../../config/navItems";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { RiTelegram2Fill } from "react-icons/ri";

interface HeaderProps {
  isAuthenticated: boolean;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isAuthenticated, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/");
  };

  return (
    <header className=" p-4 flex gap-4 items-center justify-between px-32">
      <div className="flex items-center gap-6">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="KeshOne Logo" className="h-10" />
        </Link>

        <nav className="flex gap-4">
          {navItems.map((item) => {
            if (item.authOnly && !isAuthenticated) return null;
            if (item.guestOnly && isAuthenticated) return null;
            return (
              <Link
                key={item.path}
                to={item.path}
                className="hover:text-pink-400 bg-white px-4 py-2 rounded-xl"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {!isAuthenticated && (
        <div className="flex items-center gap-4">
          <Link
            to="/likes"
            className="relative px-4 py-4 bg-white rounded-xl hover:text-pink-400"
          >
            <FaRegHeart className="text-xl" />
            <span className="absolute bottom-2 right-3 bg-pink-400 text-white text-[7px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </Link>

          <Link
            to={"/profile"}
            className="px-4 py-4 bg-white rounded-xl text-gray-500 hover:text-pink-400"
          >
            <FaRegUser className="text-xl" />
          </Link>
          <Link
            to={"/messages"}
            className="px-4 py-4 bg-white rounded-xl text-gray-500 hover:text-pink-400"
          >
            <RiTelegram2Fill className="text-xl" />
          </Link>

          <Link to={'/add-anketa'} className="text-white bg-linear-to-r from-[#9697FE] via-[#98A8FE] to-[#9AC0FF] py-3 px-4 rounded-2xl">Добавить Анкету</Link>
          {/* <button
              onClick={handleLogout}
              className="ml-4 text-sm text-red-400 hover:text-red-200"
            >
              Выйти
            </button> */}
        </div>
      )}
    </header>
  );
};

export default Header;
