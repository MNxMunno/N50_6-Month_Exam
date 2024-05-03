import React, { useState } from "react";
import Products from "../../static/products/Products";
import Category from "../../components/category/Category";
import { useFetch } from "../../hooks/useFetch";

const Home = () => {
  const [count, setCount] = useState(1);
  let url = `/products?limit=${count * 5}`;
  const { data, loading } = useFetch(url, count);

  return (
    <main>
      <section className="products">
        <div className="container">
          <Category />
          <Products loading={loading} data={data?.data} />
          <div className="btn">
            <button onClick={() => setCount((p) => p + 1)}>See More</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
