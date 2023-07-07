import React from "react";
import { Link } from "react-router-dom";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";
import { useSelector } from "react-redux";

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title"></h2>
        <div className="navPokemon">
          <img
          id="pokeNav"
            src={` https://i0.wp.com/teknofun-entertainment.com/medias/uploads/2018/11/pokemon-logo-collection.png`}
          />
        </div>
        {/* Custom pokemon font/color */}
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/user">
              Home
            </Link>
            {/* 
            <Link className="navLink" to="/info">
              Info Page
            </Link> */}

            <Link className="navLink" to="/search">
              Search
            </Link>

            <Link className="navLink" to="/teambuilder">
              Team View
            </Link>

            {/* <Link className="navLink" to="/editor"> no longer needed because this is accessed via the teambuilder page
           Editor
            </Link> */}

            {/* <Link className="navLink" to="details"> no longer needed becasue each pokemon have unique pages
          Details
            </Link> */}

            <LogOutButton className="navLink" />
          </>
        )}

        <Link className="navLink" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;
