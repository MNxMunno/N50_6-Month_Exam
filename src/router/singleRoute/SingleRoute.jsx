import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

const SingleRoute = () => {
  const { id } = useParams();
  const { data, loading,error } = useFetch(`/products/${id}`, id);

  if (error) {
    return <h2 style={{paddingTop: '90px'}}>Mahsulot topilmadi</h2>;
  }

  return (
    <div className="cards">
      {loading ? <h3>Loading...</h3> : <></>}
      <div className="card">
        <h1>{data?.data.title}</h1>
        <img src={data?.data.image} alt="" />
      </div>
    </div>
  );
};

export default SingleRoute;
