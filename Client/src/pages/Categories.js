import React from "react";
import useCategory from "../hooks/useCategory.js";
import Layout from "../components/Layout/Layout.js";
import { Link } from "react-router-dom";
import "../styles/AllCategories.css";

const Categories = () => {
  const categories = useCategory();
  return (
    <Layout title={"All Categories"}>
      <div className="category-box">
        {categories.map((c) => (
          <div className="category-cards" key={c._id}>
            <Link to={`/category/${c.slug}`} className="btn category-btn">
              {c.name}
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Categories;
