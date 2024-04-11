import React from "react";
import Layout from "./../components/Layout/Layout";
import c1 from "../assets/hogwarts.jpg"
import c2 from "../assets/shop.jpg"
import c3 from "../assets/nimbus2001.jpg"
import "../styles/landingpage.css"
import divider from "../assets/divider.svg"

const LandingPage = () => {
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
                <h5>Welcome To The World Of Philosopher's</h5>
                <p>
                  Hogwarts The Place Of learning Magic !
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={c2} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Philosopher's Store</h5>
                <p>
                    Offline Store At wingium .
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={c3} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>The Fastest BroomStick in the World !</h5>
                <p>
                  Nimbus is the fastest BroomStick present in the universe as of now!
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
      <div className="div-of-about-us">
        <div className="divider-about-us">
      <div className="divider">
          <img src={divider} className="divider-image" alt=""/>
        </div>
        <h3>ABOUT US</h3>
        <div className="invert-divider">
          <img src={divider} className="invert-divider-image" alt=""/>
        </div>
        </div>
        <br/>

        <h4>Welcome to the Philosopher's Store !</h4>
        <br/>
        <p>This store consists of all Magical Objects used in Harry Potter . As a Harry Potter fan all of us wanted to have that wonderful objects .
            So here We are presenting You All that objects .
            We Are also having the fastest broomStick Nimbus 2001 here. </p>
          
      </div>
    </Layout>
  );
};

export default LandingPage;
