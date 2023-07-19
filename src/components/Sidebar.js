import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // if(!isMenuOpen) return null
  return !isMenuOpen ? null : (
    <div className="col-span-1 pl-10 pt-5 w-48 shadow-lg">
      <ul className="pl-3">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Music</li>
        <li>Live</li>
      </ul>
      <h1 className="mt-5 font-bold">Subscriptions</h1>
      <ul className="pl-3">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="mt-5 font-bold">Explore</h1>
      <ul className="pl-3">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
