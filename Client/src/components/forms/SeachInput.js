import React from "react";
import { useSearch } from "../../context/search";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../../styles/search.css'
const SearchInput = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `/api/v1/product/search/${values.keyword}`
      );
      setValues({ ...values, results: data });
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form className="d-flex search-form" role="search" onSubmit={handleSubmit}>
        <input
          className="me-2 search-input"
          style={{
            backgroundColor: " rgba(0,0,0,0)",
            color:"white",
            hover: {
              backgroundColor: "tranparent",
              color:"white",
            },
            placeholder: {
              color: "red",
              opacity: 1, /* Firefox */
            }
          }}
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={values.keyword}
          onChange={(e) => setValues({ ...values, keyword: e.target.value })}
        />
        <button
          className="btn btn-outline-success"
          style={{
            backgroundColor: "gold",
            hover: {
              backgroundColor: "black",
              color:"white",
            },
          }}
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
