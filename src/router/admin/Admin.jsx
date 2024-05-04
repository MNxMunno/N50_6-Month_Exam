// eslint-disable-next-line no-unused-vars
import React from "react";
import img from "../../assets/images/admin.png";

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
        </div>
      </div>
    </section>
  );
};

export default Admin;
