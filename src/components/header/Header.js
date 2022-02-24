import React from "react";
import "./index.scss"
import logo from "../../images/header/Logo.png"
import search from "../../images/header/search.svg"
import basket from "../../images/header/basket.svg"
import logout from "../../images/header/Logout.svg"
import Button from "../button/Button";
export default function Header() {
  return (
    <header>
      <section className="head-sec">
        <nav className="head-nav">
          <img src={logo} alt="logo" className="logo" />
          <ul className="nav-menu">
            <li className="menus">
              <a href="#"> Home</a>
            </li>
            <li className="menus">
              <a href="page2.html">Shop</a>
            </li>
            <li className="menus">
              <a href="">Plant Care</a>
            </li>
            <li className="menus">
              <a href="">Blogs</a>
            </li>
          </ul>
          <ul className="menu-right">
            <li>
              <div id="checkbox">
                <input id="check" type="checkbox" />
              </div>
              <img
                src={search}
                alt="search"
              />
            </li>
            <a href="page3.html">
              <li>
                <img src={basket} alt="buy" />
              </li>
            </a>
            <li>
              <Button width="100" height="35" img={logout} content="Login"/>
            </li>
          </ul>
        </nav>
       
      </section>
    </header>
  );
}
