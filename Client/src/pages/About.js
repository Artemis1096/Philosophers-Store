import React from "react";
import Layout from "./../components/Layout/Layout";
import img from '../assets/shop.jpg';

const About = () => {
  return (
    <Layout title={"About"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src={img}
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2 text-white">
            In the heart of Diagon Alley, nestled between quaint cobblestone streets and bustling shops, lies one of the most enchanting establishments in the wizarding world: the Hogwarts Magic Store. With its whimsical exterior adorned with twinkling fairy lights and intricate spell motifs, the store beckons witches and wizards from far and wide to explore its wonders.
          </p>
          <p className="text-justify mt-2 text-white">
            As visitors wander through the enchanting aisles of the Philosopher's Magic Store, they are transported to a world where the impossible becomes possible and the extraordinary becomes ordinary. Whether in search of the perfect wand, potion ingredients, or ancient knowledge, the store promises an unforgettable experience filled with wonder, discovery, and the timeless magic of Hogwarts.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;