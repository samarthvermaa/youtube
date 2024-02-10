import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleMenu } from "../utils/menuSlice";

const Header = () => {
  const dispatch = useDispatch();
  const onHamburgerClick = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col m-2 shadow-lg rounded-lg">
      <div className="col-span-2  p-1 flex items-center">
        <img
          onClick={onHamburgerClick}
          className="w-8 h-8"
          alt="hamburgerIcon"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
        />
        <img
          className="w-32 h-14"
          alt="youtubeIcon"
          src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
        />
      </div>
      <div className="col-span-9 flex items-center p-1">
        <input
          className="border-2 border-gray-300 w-10/12 rounded-l-3xl p-2"
          type="text"
          placeholder="Search"
        />
        <button className="border-2 border-gray-300 bg-gray-300 w-2/12 p-2 rounded-r-3xl">
          🔍
        </button>
      </div>
      <div className="col-span-1  flex justify-center items-center">
        <img
          className="w-14"
          src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
        />
      </div>
    </div>
  );
};

export default Header;
