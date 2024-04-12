import React from "react";
import Layout from "../components/Layout/Layout.js";
import { useSearch } from "../context/search.js";
import '../styles/home.css'
const Search = () => {
  // eslint-disable-next-line
  const [values, setValues] = useSearch();
  return (
    <Layout title={"Search Results"}>
      <div className="container" style={{height:"40rem"}}>
        <div className="text-center">
          <h1 className="text-white">Search Results</h1>
          <h6 className="text-white">
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length} results`}
          </h6>
          <div className="d-flex flex-wrap mt-4">
            {values?.results.map((p) => (
              <div className="card m-2" style={{ width: "18rem" }}>
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  style={{height:"19rem"}}
                  alt={p.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">{p.description.substring(0, 30)}</p>
                  <p className="card-text">ʛ {p.price}</p>
                  <button className="bttn btn--svg-small btn--add">
                     <span>More Details</span>
                    </button>
                    <button className="bttn btn--svg-small btn--add">
                     <span>Add to Cart</span>
                    </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
