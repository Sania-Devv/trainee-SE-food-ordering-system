import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

import logo1 from "../../assets/logos/LOGO 1.png";
import maleuser from "../../assets/icons/Male User.png";
import TopBar from "./TopBar";

export default function Navbar() {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Browse Menu", path: "/menu" },
    { name: "Special Offers", path: "/offers" },
    { name: "Restaurants", path: "/restaurants" },
    { name: "Track Order", path: "/track-order" },
  ];

  return (
    <>
    <div className="flex flex-col-reverse md:flex-col w-full overflow-x-hidden">

        <TopBar />

        <nav className="bg-white w-full overflow-x-hidden">
          <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-8">
            <div className="flex justify-between items-center h-16 sm:h-20 gap-2">

              {/* Logo */}
              <img
                src={logo1}
                alt="Logo"
                className="w-16 sm:w-24 md:w-28 lg:w-36 md:mr-2 flex-shrink-0"
              />

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-1 lg:gap-2 flex-1 justify-center">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `px-2 py-2 lg:px-3 text-[13px] lg:text-base rounded-full font-medium whitespace-nowrap transition-all duration-200 ${
                        isActive
                          ? "bg-[#FC8A06] text-white"
                          : "text-black hover:text-[#FC8A06]"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>

              {/* RIGHT SIDE */}
              <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">

                {/* Login/Signup Button */}
                <button
                  onClick={() => navigate("/login")}
                  className="hidden md:flex items-center gap-1 sm:gap-2 bg-black text-white px-2 py-2
                   lg:px-3 rounded-full text-[11px] lg:text-sm hover:bg-gray-800 transition cursor-pointer flex-shrink-0"
                >
                  <img
                    src={maleuser}
                    alt="User"
                    className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0"
                  />
                  <span className="whitespace-nowrap">Login / Signup</span>
                </button>

                {/* Mobile Toggle*/}
                <button
                  className="md:hidden text-2xl sm:text-3xl flex-shrink-0"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  {menuOpen ? <HiX /> : <HiMenu />}
                </button>

              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden border-t">
              <div className="flex flex-col px-5 py-4 gap-3">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-lg font-medium transition ${
                        isActive
                          ? "bg-orange-500 text-white"
                          : "hover:bg-orange-100"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}

                {/* Login/Signupr */}
                <button
                  onClick={() => {
                    navigate("/login");
                    setMenuOpen(false);
                  }}
                  className="flex items-center justify-center gap-2 bg-black text-white py-3 rounded-full mt-2"
                >
                  <img src={maleuser} alt="User" className="w-6 h-6" />
                  <span>Login / Signup</span>
                </button>
              </div>
            </div>
          )}
        </nav>

      </div>

      <Outlet />
    </>
  );
}