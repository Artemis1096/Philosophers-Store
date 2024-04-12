import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";


import "../../styles/Layout.css";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div className="">
      <Helmet>
        <meta charSet="utf-8" />

        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />

        <title>{title}</title>
      </Helmet>
      <Header />
      <main className="" style={{ width: "100%" }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultporps = {
  title: "Ecommerce app",
  description: "mern stack ",
  keywords: "mern , react , node",
  author: "tech",
};
export default Layout;