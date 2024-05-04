import React from "react";
import Skeleton from "../../components/skeleton/Skeleton";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const Products = ({ data, loading }) => {
  let card = data?.map((element) => (
    <div key={element.id} className="card">
      <Link to={`/product/${element.id}`}>
        <img src={element.image} alt={element.title} />
      </Link>
      <div className="card__content">
        <b>{element.category}</b>
        <h3 title={element.title}>{element.title}</h3>
        <p>⭐{element.rating.rate}</p>
      </div>
      <div className="btns">
        <button>
          {element.price} <del>{element.price * 2}</del>
        </button>
        <button>
          <FaCartShopping />
        </button>
      </div>
    </div>
  ));
  return (
    <>
      {loading ? <Skeleton count={10} /> : <></>}
      <div className="cards_pro">{card}</div>
    </>
  );
};

export default Products;
