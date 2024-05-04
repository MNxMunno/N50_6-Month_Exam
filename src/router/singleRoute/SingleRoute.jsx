import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Banner from "../../static/banner/Banner";
import Loading from "../../components/loading/Loading";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { PiArrowBendDownRightBold } from "react-icons/pi";
import { CiFilter } from "react-icons/ci";

import Box from "@mui/material/Box/Box";
import Slider from "@mui/material/Slider";
function valuetext(value) {
  return `${value}°C`;
}

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
  const cateData = [
    {
      id: 1,
      img: "https://i.postimg.cc/zX0229wc/right-1.png",
      rate: 5,
    },
    {
      id: 2,
      img: "https://i.postimg.cc/fknzGVhM/right-2.png",
      rate: 6,
    },
    {
      id: 3,
      img: "https://i.postimg.cc/3JYJFD9Z/right-3.png",
      rate: 7,
    },
    {
      id: 4,
      img: "https://i.postimg.cc/Sxj4gL9c/right-4.png",
      rate: 12,
    },
    {
      id: 5,
      img: "https://i.postimg.cc/cJQbh6FQ/right-5.png",
      rate: 16,
    },
  ];
  const card = cateData?.map((el) => (
    <div key={el.id} className="right_card">
      <img src={el.img} alt="img" />
      <p>{el.rate}</p>
    </div>
  ));

  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
                <div className="imgss">
                  <div className="imgs card">
                    <img src={data?.data.image} />
                  </div>
                  <div className="imgs card">
                    <img src={data?.data.image} />
                  </div>
                  <div className="imgs card">
                    <img src={data?.data.image} />
                  </div>
                  <div className="imgs card">
                    <img src={data?.data.image} />
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
            <div className="card__info">
              <div className="btns">
                <button>Description</button>
                <button>Additional info</button>
                <button>Vendor</button>
                <button>Reviews (3)</button>
              </div>
              <p>
                Uninhibited carnally hired played in whimpered dear gorilla
                koala depending and much yikes off far quetzal goodness and from
                for grimaced goodness unaccountably and meadowlark near
                unblushingly crucial scallop tightly neurotic hungrily some and
                dear furiously this apart.
              </p>
              <p>
                Spluttered narrowly yikes left moth in yikes bowed this that
                grizzly much hello on spoon-fed that alas rethought much
                decently richly and wow against the frequent fluidly at
                formidable acceptably flapped besides and much circa far over
                the bucolically hey precarious goldfinch mastodon goodness
                gnashed a jellyfish and one however because.
              </p>

              <p>
                Laconic overheard dear woodchuck wow this outrageously taut
                beaver hey hello far meadowlark imitatively egregiously hugged
                that yikes minimally unanimous pouted flirtatiously as beaver
                beheld above forward energetic across this jeepers beneficently
                cockily less a the raucously that magic upheld far so the this
                where crud then below after jeez enchanting drunkenly more much
                wow callously irrespective limpet.
              </p>
              <h3>Packaging & Delivery</h3>
              <p>
                Less lion goodness that euphemistically robin expeditiously
                bluebird smugly scratched far while thus cackled sheepishly
                rigid after due one assenting regarding censorious while
                occasional or this more crane went more as this less much amid
                overhung anathematic because much held one exuberantly sheep
                goodness so where rat wry well concomitantly.
              </p>
              <p>
                Scallop or far crud plain remarkably far by thus far iguana lewd
                precociously and and less rattlesnake contrary caustic wow this
                near alas and next and pled the yikes articulate about as less
                cackled dalmatian in much less well jeering for the thanks
                blindly sentimental whimpered less across objectively fanciful
                grimaced wildly some wow and rose jeepers outgrew lugubrious
                luridly irrationally attractively dachshund.
              </p>
              <h3>Suggested Use</h3>
              <p>Refrigeration not necessary.</p>
              <p>Stir before serving</p>
              <h3>Other Ingredients</h3>
              <p>Organic raw pecans, organic raw cashews.</p>
              <p>
                This butter was produced using a LTG (Low Temperature Grinding)
                process
              </p>
              <p>
                Made in machinery that processes tree nuts but does not process
                peanuts, gluten, dairy or soy
              </p>
              <h3>Warnings</h3>
              <p>
                Oil separation occurs naturally. May contain pieces of shell.
              </p>
            </div>
          </div>
          <div className="content__card">
            <div className="right__cards">
              <div className="card">
                <h3>Category</h3>
                <div className="content">{card}</div>
              </div>

              <div className="card">
                <h3>Fill by price</h3>
                <Box sx={{ width: 300 }}>
                  <Slider
                    getAriaLabel={() => "Temperature range"}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                  />
                </Box>
                <div className="price">
                  <p>
                    From: <span>$500</span>
                  </p>
                  <p>
                    To: <span>$1,000</span>
                  </p>
                </div>
                <h4>Color</h4>
                <div className="check">
                  <input type="checkbox" />
                  <p>Red (56)</p>
                </div>
                <div className="check">
                  <input type="checkbox" />
                  <p>Green (78)</p>
                </div>
                <div className="check">
                  <input type="checkbox" />
                  <p>Blue (54)</p>
                </div>
                <h4>Item Condition</h4>
                <div className="check">
                  <input type="checkbox" />
                  <p>New (1506)</p>
                </div>
                <div className="check">
                  <input type="checkbox" />
                  <p>Refurbished (27)</p>
                </div>
                <div className="check">
                  <input type="checkbox" />
                  <p>Used (45)</p>
                </div>
                <button className="filter">
                  <CiFilter />
                  <b>Fillter</b>
                </button>
              </div>
              <div className="card">
                <h3>New products</h3>
                <div className="pro">
                  <img
                    src={data?.data.image}
                    width={60}
                    height={60}
                    alt="img"
                  />
                  <div className="title">
                    <h4>{data?.data.category}</h4>
                    <b>$ {data?.data.price} ⭐</b>
                  </div>
                </div>
                <div className="pro">
                  <img
                    src={data?.data.image}
                    width={60}
                    height={60}
                    alt="img"
                  />
                  <div className="title">
                    <h4>{data?.data.category}</h4>
                    <b>$ {data?.data.price} ⭐</b>
                  </div>
                </div>
                <div className="pro">
                  <img
                    src={data?.data.image}
                    width={60}
                    height={60}
                    alt="img"
                  />
                  <div className="title">
                    <h4>{data?.data.category}</h4>
                    <b>$ {data?.data.price} ⭐</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Banner />
      </div>
    </section>
  );
};

export default SingleRoute;
