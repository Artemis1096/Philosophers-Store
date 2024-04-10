import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import SearchInput from "../forms/SeachInput";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/cart";
import { Badge } from "antd";
import logo from "./img.svg";
import logo2 from '../../assets/logo.png'
import divider from"./divider.svg"
import '../../styles/header.css'
import "../../styles/Layout.css";
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import LocalMallTwoToneIcon from '@mui/icons-material/LocalMallTwoTone';

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const categories = useCategory();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Succcessfully");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg header-main">
        <div className="container-fluid">
          <button
            className="navbar-toggler header-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse"
            style={{
              color: "red",
            }}
            id="navbarTogglerDemo01"
          >
            <Link to="/" className="navbar-brand">
              <img src={logo2} className="logo-image" alt="" />
            </Link>
            <Link to="/" className="navbar-brand">
              <img src={logo} className="philosopher-image" alt="" />
            </Link>
            {/* <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navbar-items">
              <SearchInput />
            </ul> */}
            <AccountCircleTwoToneIcon className="user-logo"/>
            <LocalMallTwoToneIcon className="cart-icon-head"/>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg nav-main">
        <div className="divider">
          <img src={divider} className="divider-image" alt=""/>
        </div>
        <div>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navbar-items">
              <li className="nav-item">
                <NavLink to="/" className="nav-link ">
                  Home
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={"/categories"}
                  data-bs-toggle="dropdown"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={"/categories"}>
                      All Categories
                    </Link>
                  </li>
                  {categories?.map((c) => (
                    <li>
                      <Link
                        className="dropdown-item"
                        to={`/category/${c.slug}`}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              {!auth.user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link" href="#">
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link" href="#">
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          className="dropdown-item"
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item"
                          href="#"
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}
              <li className="nav-item">
                <Badge count={cart?.length} showZero>
                  <NavLink to="/cart" className="nav-link cart-nav" href="#">
                    Cart
                  </NavLink>
                </Badge>
              </li>
            </ul>
        </div>
        <div className="invert-divider">
          <img src={divider} className="invert-divider-image" alt=""/>
        </div>
      </nav>

    </>
  );
};

export default Header;