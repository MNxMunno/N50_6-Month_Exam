import React from "react";

const Loading = () => {
  return (
    <div className="product__loading ">
      <div className="load">
        <div className="loading__imgs">
          <div className="skeleton"></div>
          <div className="skeleton"></div>
          <div className="skeleton"></div>
          <div className="skeleton"></div>
        </div>
        <div className="loading__hero__img skeleton"></div>
      </div>
      <div className="loading__info">
        <h1 className="skeleton"></h1>
        <h1 className="skeleton"></h1>
        <h1 className="skeleton last"></h1>
        <p className="skeleton"></p>
        <h3 className="skeleton"></h3>
        <h4 className="skeleton"></h4>
        <h5 className="skeleton"></h5>
        <h5 className="skeleton last"></h5>
        <div className="loading__btns">
          <div className="skeleton"></div>
          <div className="skeleton"></div>
        </div>
        <h6 className="skeleton"></h6>
        <div className="skeleton like"></div>
      </div>
      {/* <div className="loading__credit">
        <h1 className="skeleton"></h1>
        <div className="btns">
          <div className="skeleton"></div>
          <div className="skeleton"></div>
          <div className="skeleton"></div>
        </div>
        <div className="load__btn">
          <h4 className="skeleton"></h4>
          <div className="imgs">
            <div className="skeleton"></div>
            <div className="skeleton"></div>
          </div>
          <div className="button skeleton"></div>
        </div>
        <div className="load__btn__two">
          <h5 className="skeleton"> </h5>
          <div className="imgs">
            <div className="skeleton"></div>
            <div className="skeleton"></div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Loading;
