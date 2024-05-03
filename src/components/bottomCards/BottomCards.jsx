import React from "react";

const Benefits = () => {
  const data = [
    {
      id: 1,
      img: "https://i.postimg.cc/3w2S8MMZ/b-1.png",
      title: "Best prices & offers",
      desc: "Orders $50 or more",
    },
    {
      id: 2,
      img: "https://i.postimg.cc/C5xmszRv/b-2.png",
      title: "Free delivery",
      desc: "24/7 amazing services",
    },
    {
      id: 3,
      img: "https://i.postimg.cc/KYhfs9K3/b03.png",
      title: "Great daily deal",
      desc: "When you sign up",
    },
    {
      id: 4,
      img: "https://i.postimg.cc/qRjGq412/b-4.png",
      title: "Wide assortment",
      desc: "Mega Discounts",
    },
    {
      id: 5,
      img: "https://i.postimg.cc/0j4dGZRQ/b-5.png",
      title: "Easy returns",
      desc: "Within 30 days",
    },
  ];

  let card = data?.map((el) => (
    <div key={el.id} className="bottom_section__card">
      <img src={el.img} alt="img" />
      <div>
        <p>{el.title}</p>
        <h5>{el.desc}</h5>
      </div>
    </div>
  ));
  return (
    <div className="bottom__section">
      <div className="container">
        <div className="bottom__section__content">{card}</div>
      </div>
    </div>
  );
};

export default Benefits;
