import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Auth/Register.js";
import Login from "./pages/Auth/Login.js";
import Dashboard from "./pages/user/Dashboard.js";
import PrivateRoute from "./components/Routes/Private.js";
import ForgotPassword from "./pages/Auth/ForgotPassword.js";
import AdminRoute from "./components/Routes/AdminRoute.js"
import AdminDashboard from "./pages/admin/adminDashboard.js";
import CreateCategory from "./pages/admin/CreateCategory.js";
import CreateProduct from "./pages/admin/CreateProduct.js"
import Users from "./pages/admin/Users.js"
import Orders from "./pages/user/Orders.js"
import Profile from "./pages/user/Profile.js"
import Products from "./pages/admin/Products.js";
import UpdateProduct from "./pages/admin/UpdateProduct.js";
import Search from "./pages/Search.js"
import ProductDetail from './pages/productDetails.js'
import Categories from "./pages/Categories.js";
import CategoryProduct from "./pages/CategoryProduct.js";

function App() {
  return (
    <>
      <Routes>
        {/* Pages routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:slug" element={<CategoryProduct />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<Pagenotfound />} />


        {/*User Dashboard routes */}
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>

        {/* Admin Dashboard routes */}
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />}/>
          <Route path="admin/create-product" element={<CreateProduct />}/>
          <Route path="admin/product/:slug" element={<UpdateProduct />}/>
          <Route path="admin/products" element={<Products />}/>
          <Route path="admin/users" element={<Users />}/>
        </Route>
        

        {/* Login / Signup */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

      </Routes>
    </>
  );
}

export default App;
