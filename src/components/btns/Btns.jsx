import React from "react";

const Btns = () => {
  const data = [
    {
      id: 1,
      img: "https://i.postimg.cc/sxZpwsgd/burger.png",
      title: "Cake & Milk",
      text: "26 items",
    },
    {
      id: 2,
      img: "https://i.postimg.cc/dtPWpxPm/kiwi.png",
      title: "Oganic Kiwi",
      text: "28 items",
    },
    {
      id: 3,
      img: "https://i.postimg.cc/13MJgRgJ/peach.png",
      title: "Peach",
      text: "14 items",
    },
    {
      id: 4,
      img: "https://i.postimg.cc/VvjFzzQ9/apple.png",
      title: "Red Apple",
      text: "54 items",
    },
    {
      id: 5,
      img: "https://i.postimg.cc/FK8bcYhg/snack.png",
      title: "Snack",
      text: "56 items",
    },
    {
      id: 6,
      img: "https://i.postimg.cc/Cx6bTRnT/karam.png",
      title: "Vegetables",
      text: "72 items",
    },
    {
      id: 7,
      img: "https://i.postimg.cc/gJ3hZ4Sm/qulpnay.png",
      title: "Strawberry",
      text: "36 items",
    },
    {
      id: 8,
      img: "https://i.postimg.cc/4NfcY6zR/plam.png",
      title: "Black plum",
      text: "123 items",
    },
    {
      id: 9,
      img: "https://i.postimg.cc/4xMH2jjX/custad.png",
      title: "Custard apple",
      text: "34 items",
    },
    {
      id: 10,
      img: "https://i.postimg.cc/C5FRf0ns/tea.png",
      title: "Coffe & Tea",
      text: "89 items",
    },
  ];

  const card = data?.map((el) => (
    <button key={el.id} className="card">
      <img src={el.img} alt="img" />
      <h3>{el.title}</h3>
      <p>{el.text}</p>
    </button>
  ));
  return (
    <section className="btns">
      <div className="container">
        <div className="content">
          <h2>Featured Categories</h2>
          <div className="cards">{card}</div>
        </div>
      </div>
    </section>
  );
};

export default Btns;
