import React from "react";
import style from "./index.module.css"
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <ul className={style.nav}>
        <Link  to='/'><li>Drivers</li></Link>
        <Link to='/favorites'><li>Favorites</li></Link>
      </ul>
    </>
  );
}
