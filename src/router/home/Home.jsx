import React, { useState } from "react";
import Products from "../../static/products/Products";
import Category from "../../components/category/Category";
import BottomCards from "../../components/bottomCards/BottomCards";
import Btns from "../../components/btns/Btns";
import { useFetch } from "../../hooks/useFetch";
import Swiper from "../../components/swiper/Swiper";
import Banner from "../../static/banner/Banner";
const Home = () => {
  const [count, setCount] = useState(1);
  const { data: categories } = useFetch(`/products/categories`);
  const [category, setCategory] = useState("all");

  let url = `/products${
    category === "all" ? "" : `/category/${category}`
  }?limit=${count * 5}`;
  const { data, loading } = useFetch(url, count, category);

  let options = categories?.data?.map((el, inx) => (
    <option key={inx} value={el}>
      {el}
    </option>
  ));

  return (
    <main>
      <Swiper />
      <Btns />
      <Category />
      <section className="products">
        <div className="container">
          <div className="content">
            <h2>Popular Products</h2>
            <select
              className="container"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              name=""
              id=""
            >
              <option value="all">All</option>
              {options}
            </select>
          </div>
          <Products loading={loading} data={data?.data} />
          <div className="btn">
            <button onClick={() => setCount((p) => p + 1)}>See More</button>
          </div>
        </div>
      </section>
      <Banner />
      <BottomCards />
    </main>
  );
};

export default Home;
