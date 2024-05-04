import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Banner from "../../static/banner/Banner";
import Loading from "../../components/loading/Loading";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { PiArrowBendDownRightBold } from "react-icons/pi";

const SingleRoute = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`/products/${id}`, id);

  if (error) {
    return <h2 style={{ paddingTop: "90px" }}>Mahsulot topilmadi</h2>;
  }
  let [count, setCount] = useState(0);
  const inc = () => {
    setCount(count + 1);
  };
  const dec = () => {
    setCount(count - 1);
  };

  return (
    <section className="singleRoute">
      <div className="container">
        <div className="content">
          <div className="content__card">
            <div className="cards">
              {loading ? <Loading /> : <></>}
              <div className="card cardd">
                <img
                  className="hero___card"
                  src={data?.data.image}
                  width={350}
                  height={250}
                  alt=""
                />
                <div className="imgs" style={{ display: "flex", gap: "32px" }}>
                  <div className="imgs card">
                    <img src={data?.data.image} width={80} height={80} alt="" />
                  </div>
                  <div className="imgs card">
                    <img src={data?.data.image} width={80} height={80} alt="" />
                  </div>
                  <div className="imgs card">
                    <img src={data?.data.image} width={80} height={80} alt="" />
                  </div>
                  <div className="imgs card">
                    <img src={data?.data.image} width={80} height={80} alt="" />
                  </div>
                </div>
              </div>
              <div className="card">
                <h1>{data?.data.title}</h1>
                <p className="rating">⭐ {data?.data.rating.rate}</p>
                <b>
                  ${data?.data.price} <del>{data?.data.price * 2}</del>{" "}
                </b>
                <p className="desc">{data?.data.description}</p>
                <div className="card__btns">
                  <div className="count">
                    <button onClick={dec} disabled={count <= 1}>
                      -
                    </button>
                    <h1>{count}</h1>
                    <button onClick={inc} disabled={count >= 10}>
                      +
                    </button>
                  </div>
                  <button className="add">
                    <FaCartShopping />
                    <p>Add to cart</p>
                  </button>
                  <button className="like">
                    <FaRegHeart />
                  </button>
                  <button className="arrow">
                    <PiArrowBendDownRightBold />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="content__card"></div>
        </div>
        <Banner />
      </div>
    </section>
  );
};

export default SingleRoute;
