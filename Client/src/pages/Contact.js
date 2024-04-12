import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact Us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2 text-white">
            Any query and info about product feel free to call anytime we 24X7
            available
          </p>
          <p className="mt-3 text-white">
            <BiMailSend /> : PhilosopherStore@hogwarts.com
          </p>
          <p className="mt-3 text-white">
            <BiPhoneCall /> : 9490394039
          </p>
          <p className="mt-3 text-white">
            <BiSupport /> : 1800-0000-0000 
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;