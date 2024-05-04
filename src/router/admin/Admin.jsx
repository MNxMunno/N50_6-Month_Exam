// eslint-disable-next-line no-unused-vars
import React from "react";
import img from "../../assets/images/admin.png";
import Banner from "../../static/banner/Banner";
import { LuMapPin } from "react-icons/lu";
import gril from "../../assets/images/gril.png";

const Admin = () => {
  const data = [
    {
      id: 1,
      title: "01. Visit Feedback",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
      elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
      leo.`,
    },
    {
      id: 2,
      title: "02. Employer Services",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
      elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
      leo.`,
    },
    {
      id: 3,
      title: "03. Billing Inquiries",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
      elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
      leo.`,
    },
    {
      id: 4,
      title: "04.General Inquiries",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
      elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
      leo.`,
    },
  ];
  const map = [
    {
      id: 1,
      text: `205 North Michigan Avenue, Suite 810
      Chicago, 60601, USA
      Phone: (123) 456-7890
      Email: contact@Evara.com`,
      title: "Office",
    },
    {
      id: 2,
      text: `205 North Michigan Avenue, Suite 810
      Chicago, 60601, USA
      Phone: (123) 456-7890
      Email: contact@Evara.com`,
      title: "Studio",
    },
    {
      id: 3,
      text: `205 North Michigan Avenue, Suite 810
      Chicago, 60601, USA
      Phone: (123) 456-7890
      Email: contact@Evara.com`,
      title: "Shop",
    },
  ];

  const mapCard = map?.map((el) => (
    <div key={el.id} className="mapCard">
      <h3>{el.title}</h3>
      <p>{el.text}</p>
      <button className="btn__map">
        <LuMapPin />

        <p>View map</p>
      </button>
    </div>
  ));

  const card = data?.map((el) => (
    <div className="card" key={el.id}>
      <h2>{el.title}</h2>
      <p>{el.text}</p>
    </div>
  ));
  return (
    <section className="admin-section" style={{ paddingTop: "120px" }}>
      <div className="container">
        <div className="content">
          <div className="cards">
            <div className="card">
              <b>How can help you ?</b>
              <h1>Admin panel</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div className="card childCard">{card}</div>
          </div>
          <img className="map" src={img} alt="img" />
          <div className="mapCards">{mapCard}</div>
          <div className="dropCards">
            <div className="card">
              <form>
                <input type="text" placeholder="First Name" />
                <input type="email" placeholder="Your Email" />
                <input type="tel" placeholder="Your Phone" />
                <input type="text" placeholder="Subject" />
                <textarea name="text" id="text" rows="10" cols="50"></textarea>
                <button type="submit">Send message</button>
              </form>
            </div>
            <div className="card">
              <img src={gril} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Banner />
    </section>
  );
};

export default Admin;
