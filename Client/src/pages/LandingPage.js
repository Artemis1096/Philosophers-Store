import React,{useState,useEffect} from "react";
import Layout from "./../components/Layout/Layout";
import c1 from "../assets/hogwarts.jpg";
import c2 from "../assets/shop.jpg";
import c3 from "../assets/nimbus2001.jpg";
import "../styles/landingpage.css";
import divider from "../assets/divider.svg";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { useCart } from "../context/cart";
import axios from "axios";

const LandingPage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
    // get all products
    const getAllProducts = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
        setLoading(false);
        setProducts(data.products);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
  
    useEffect(() => {
      if (!checked.length || !radio.length) getAllProducts();
      // eslint-disable-next-line
    }, [checked.length, radio.length]);
  return (
    <Layout title={"Philosopher's Store"}>
      <div className="div-of-landing">
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={c1} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Welcome To The Philosopher's Store</h5>
                <p>Hogwarts The Place Of learning Magic !</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={c2} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Philosopher's Store</h5>
                <p>Offline Store At Diagon Alley.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={c3} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>The Fastest BroomStick in the World !</h5>
                <p>
                  Nimbus is the fastest BroomStick present in the universe as of
                  now!
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="latest-main">
        <div className="divider-about-us">
          <div className="divider">
            <img src={divider} className="divider-image" alt="" />
          </div>
          <h3>Latest Products</h3>
          <div className="invert-divider">
            <img src={divider} className="invert-divider-image" alt="" />
          </div>
        </div>
        <br />
        {/* // */}
        <div className="d-flex products-card-all">
              {products?.map((p) => (
                <div
                  className="card m-2 div-of-product"
                  style={{ width: "18rem" }}
                  key={p._id}
                >
                  <div id="product-image">
                    <img
                      src={`/api/v1/product/product-photo/${p._id}`}
                      className="card-img-top"
                      
          
                      alt={p.name} 
                    />
                  </div>
               
                  <div className="card-body image-lower-layout">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">
                      {p.description.substring(0, 60)}
                    </p>
                    <p className="card-text">{p.price}</p>
                    <div className="buttons-for-product">
                    <div>
                    <button
                      className="bttn btn--svg-small btn--add"
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                     <span>More Details</span>
                    </button>
                    </div>
                    <div>
                    <button
                      className="bttn btn--svg-small btn--add"
                      onClick={() => {
                        setCart([...cart, p]);
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, p])
                        );
                        toast.success("Item Added to Cart");
                      }}
                    >
                      <span>Add to cart</span>
                    </button></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
      </div>
      <div className="div-of-about-us">
        <div className="divider-about-us">
          <div className="divider">
            <img src={divider} className="divider-image" alt="" />
          </div>
          <h3>ABOUT US</h3>
          <div className="invert-divider">
            <img src={divider} className="invert-divider-image" alt="" />
          </div>
        </div>
        <br />
        <h4 style={{ textAlign: "center" }}>
          Welcome to the Philosopher's Store !
        </h4>
        <br />
        <p style={{ textAlign: "center" }}>
          In the heart of Diagon Alley, nestled between quaint cobblestone
          streets and bustling shops, lies one of the most enchanting
          establishments in the wizarding world: the Hogwarts Magic Store. With
          its whimsical exterior adorned with twinkling fairy lights and
          intricate spell motifs, the store beckons witches and wizards from far
          and wide to explore its wonders.
        </p>
        <p style={{ textAlign: "center" }}>
          As visitors wander through the enchanting aisles of the Philosopher's
          Magic Store, they are transported to a world where the impossible
          becomes possible and the extraordinary becomes ordinary. Whether in
          search of the perfect wand, potion ingredients, or ancient knowledge,
          the store promises an unforgettable experience filled with wonder,
          discovery, and the timeless magic of Hogwarts.
        </p>
      </div>
    </Layout>
  );
};

export default LandingPage;
