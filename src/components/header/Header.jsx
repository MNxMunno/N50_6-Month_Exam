import React, { useState } from "react";
import "../header/Header.css";
import { IoMenu, IoSearch, IoHome } from "react-icons/io5";
import { FaRegUser, FaRegHeart, FaFire, FaChevronDown } from "react-icons/fa";
import { TbCategory2 } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { LuGitCompare } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
import logo from "../../assets/images/logo.svg";
import SideTop from "../site__top/SiteTop";

function Header() {
  const [toggel, setToggel] = useState(false);
  return (
    <>
      <SideTop />
      <header className="navbar__wrapper">
        <div className="container">
          <nav className="navbar">
            <NavLink to={"/"} className="navbar__logo">
              <img src={logo} alt="" />
            </NavLink>
            <button
              className="navbar__category-btn"
              onClick={() => setToggel(!toggel)}
            >
              <IoMenu />
              <span>Katalog</span>
            </button>
            <div className="navbar__search">
              <input type="text" placeholder="Search..." />
              <button>
                <IoSearch />
              </button>
            </div>
            <div className="navbar__collection">
              <NavLink to={"/"} className="navbar__item">
                <IoHome />
                <span>Bosh Sahifa</span>
              </NavLink>
              <NavLink to={"/"} className="navbar__item">
                <LuGitCompare />

                <span>Compare</span>
              </NavLink>
              <NavLink to={"/"} className="navbar__item">
                <FaRegHeart />

                <span>Wishlist</span>
              </NavLink>
              <NavLink to={"/"} className="navbar__item">
                <FiShoppingCart />
                <span>Cart</span>
              </NavLink>
              <NavLink to={"/login"} className="navbar__item">
                <FaRegUser />
                <span>Login</span>
              </NavLink>
              <NavLink to={"/admin"} className="navbar__item">
                <FaRegUser />
                <span>Admin</span>
              </NavLink>
            </div>
          </nav>
        </div>
        <div className={`header ${toggel ? "show" : ""}`}>
          <div className="container">
            <nav className="header__bottom">
              <button className="btn__category">
                <TbCategory2 />
                <p className="category__btn">Browse All Categories</p>
                <FaChevronDown className="down" />
              </button>
              <button className="deals">
                <FaFire />
                <p>Deals</p>
              </button>
              <button className="btn__select">
                <p>Home</p>
                <FaChevronDown />
              </button>
              <button className="btn__select">
                <p>About</p>
              </button>
              <button className="btn__select">
                <p>Shop</p>
                <FaChevronDown />
              </button>
              <button className="btn__select">
                <p>Vendors</p>
                <FaChevronDown />
              </button>
              <button className="btn__select">
                <p>Mega menu</p>
                <FaChevronDown />
              </button>
              <button className="btn__select">
                <p>Blog</p>
                <FaChevronDown />
              </button>
              <button className="btn__select">
                <p>Pages </p>
                <FaChevronDown />
              </button>
              <button className="btn__select">
                <p>Contact</p>
              </button>
              <button className="support">
                <p className="icon">
                  <BiSupport />
                </p>
                <div className="text">
                  <h5>1900 - 888</h5>
                  <p>24/7 Support Center</p>
                </div>
              </button>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
