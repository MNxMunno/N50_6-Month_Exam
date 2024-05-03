import React from "react";

const SiteTop = () => {
  return (
    <section className="top">
      <div className="container">
        <div className="cards">
          <div className="card">
            <p>About Us</p>
            <p>My Account</p>
            <p>Wishlist</p>
            <p>Order Tracking</p>
          </div>
          <div className="card">
            <p>
              Need help? Call Us: <span>+ 1800 900</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiteTop;
