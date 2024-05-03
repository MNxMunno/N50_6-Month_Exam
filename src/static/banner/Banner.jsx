import React from "react";

import img from "../../assets/images/banner-img.png";
const Banner = () => {
  return (
    <section className="banner">
      <div className="contaienr">
        <div className="content">
          <img src={img} alt="" />
          <h1>Stay home & get your daily needs from our shop</h1>
          <p>Start You'r Daily Shopping with Nest Mart</p>
          <form>
            <input
              type="text"
              id="text"
              name="text"
              placeholder="Your emaill address"
            />
            <button>Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Banner;
