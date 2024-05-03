import React from "react";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { TbClockHour10 } from "react-icons/tb";
import { SiYoutubestudio } from "react-icons/si";

import { FaFacebook, FaInstagramSquare, FaPinterest } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import cart from "../../assets/images/carts.png";
import appStore from "../../assets/images/appStore.png";
import googlePlay from "../../assets/images/GooglePlay.png";

const Footer = () => {
  const company = [
    "About Us",
    "Delivery Information",
    "Privacy Policy",
    "Terms & Conditions",
    "Contact Us",
    "Support Center",
    "Careers",
  ];
  const account = [
    "Sign In",
    "View Cart",
    "My Wishlisty",
    "Track My Orders",
    "Help Ticket",
    "Shipping Details",
    "Compare products",
  ];
  const corporate = [
    "Become a Vendor",
    "Affiliate Program",
    "Farm Business",
    "Farm Careers",
    "Our Suppliers",
    "Accessibility",
    "Promotions",
  ];
  const popular = [
    "Milk & Flavoured Milk",
    "Butter and Margarine",
    "Eggs Substitutes",
    "Marmalades",
    "Sour Cream and Dips",
    "Tea & Kombucha",
    "Cheese",
  ];
  let companys = company?.map((el, inx) => (
    <a href="#" key={inx}>
      {el}
    </a>
  ));
  let accounts = account?.map((el, inx) => (
    <a href="#" key={inx}>
      {el}
    </a>
  ));
  let corporates = corporate?.map((el, inx) => (
    <a href="#" key={inx}>
      {el}
    </a>
  ));
  let populars = popular?.map((el, inx) => (
    <a href="#" key={inx}>
      {el}
    </a>
  ));

  return (
    <footer>
      <div className="container">
        <div className="cards">
          <div className="card">
            <Link to={"/"}>
              <img src={logo} alt="logo" />
            </Link>
            <p>Awesome grocery store website template</p>
            <a href="#">
              <CiLocationOn />
              Address: 5171 W Campbell Ave
            </a>
            <p>undefined Kent, Utah 53127 United States</p>
            <a href="#">
              {" "}
              <BiSupport /> Call Us:(+91) - 540-025-124553
            </a>
            <a href="#">
              <IoIosSend /> Email:sale@Nest.com
            </a>
            <a href="#">
              <TbClockHour10 /> Hours:10:00 - 18:00, Mon - Sat
            </a>
          </div>
          <div className="card">
            <h2>Company</h2>
            {companys}
          </div>
          <div className="card">
            <h2>Account</h2>
            {accounts}
          </div>
          <div className="card">
            <h2>Corporate</h2>
            {corporates}
          </div>
          <div className="card">
            <h2>Popular</h2>
            {populars}
          </div>
          <div className="card">
            <h2>Install App</h2>
            <p>From App Store or Google Play</p>
            <div className="application">
              <img src={appStore} alt="img" />
              <img src={googlePlay} alt="img" />
            </div>
            <p>Secured Payment Gateways</p>
            <img src={cart} alt="" />
          </div>
        </div>
        <div className="footer__bottom">
          <p>
            © 2022, <span>Nest</span> - HTML Ecommerce Template All rights
            reserved
          </p>
          <div className="call">
            <div className="content">
              <p>
                <FiPhoneCall />
              </p>
              <div className="text">
                <h3>1900 - 6666</h3>
                <p>Working 8:00 - 22:00</p>
              </div>
            </div>
            <div className="content">
              <p>
                <FiPhoneCall />
              </p>
              <div className="text">
                <h3>1900 - 8888</h3>
                <p>24/7 Support Center</p>
              </div>
            </div>
          </div>
          <div className="sites">
            <div className="content">
              <h3>Follow Us</h3>
              <div className="links">
                <a href="https://www.facebook.com/">
                  <FaFacebook />
                </a>
                <a href="https://twitter.com/">
                  <AiFillTwitterCircle />
                </a>
                <a href="https://www.instagram.com/">
                  <FaInstagramSquare />
                </a>
                <a href="https://www.pinterest.com/">
                  <FaPinterest />
                </a>
                <a href="https://www.youtube.com/">
                  <SiYoutubestudio />
                </a>
              </div>
            </div>
            <p>Up to 15% discount on your first subscribe</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
